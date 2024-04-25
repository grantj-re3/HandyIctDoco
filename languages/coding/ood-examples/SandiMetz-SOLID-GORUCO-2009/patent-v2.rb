#!/usr/bin/ruby
#
# UNTESTED. Copied from presentation below.
#
# GORUCO 2009 - SOLID Object-Oriented Design by Sandi Metz
# https://www.youtube.com/watch?v=v-2yFMzxqwU
# VERSION 2: 24m17s, 25m36s

Class PatentJob
  attr_reader :downloader

  def initialize(downloader = PatentDownloader.new)   # Injected dependency
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

class PatentDownloader
  def download_file
    temp = Tempfile.new('patents')
    tempname = temp.path
    temp.close
    Net::FTP.open('localhost', 'foo', 'foopw') do |ftp|
      ftp.getbinaryfile('Public/prod/patents.csv', tempname)
    end
    tempname
  end

end

