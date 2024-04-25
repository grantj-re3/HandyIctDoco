#!/usr/bin/ruby
#
# UNTESTED. Copied from presentation below.
#
# GORUCO 2009 - SOLID Object-Oriented Design by Sandi Metz
# https://www.youtube.com/watch?v=v-2yFMzxqwU
# VERSION 3: 33m30s - 36m44s

Class PatentJob
  attr_reader :downloader

  def initialize(downloader = FtpDownloader.new)   # Injected dependency
    @downloader = downloader
  end

  def run
    temp = downloader.download_file
    rows = parse(temp)
    update_patents(rows)
  end

  def parse(temp)
    FasterCSV.read(temp, :headers => true)
  end

  def update_patents(rows)
    Patent.connection.transaction {
      Patent.delete_all
      rows.each{|r| Patent.create!(r.to_hash)}
    }
  end

end

class FtpDownloader
  attr_reader :config

  def initialize(config = Config.new(:filename => 'patent-v3.yaml'))
    @config = config
  end

  def download_file
    temp = Tempfile.new(config.ftp_filename)
    tempname = temp.path
    temp.close
    Net::FTP.open(config.ftp_host, config.ftp_login, config.ftp_password) do |ftp|
      ftp.getbinaryfile(File.join(config.ftp_path, config.ftp_filename), tempname)
    end
    tempname
  end

end

class Config
  attr_reader :data, :env

  def self.config_path
    File.join('config', 'external_resources')
  end

  def initialize(opts)
    @env     = opts[:env] ||= Rails.env
    filename = opts[:filename]
    @data = YAML::load_file(File.join(self.class.config_path, filename))
    define_methods_for_environment(data[env].keys)
  end

  def define_methods_for_environment(names)
    names.each do |name|
      class_eval <<-EOS
        def #{name}                 # def ftp_host
          data[env]['#{name}']      #   data[env]['ftp_host']
        end                         # end
      EOS
    end
  end

end

