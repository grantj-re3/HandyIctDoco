#!/usr/bin/ruby
#
# UNTESTED. Copied from presentation below.
#
# GORUCO 2009 - SOLID Object-Oriented Design by Sandi Metz
# https://www.youtube.com/watch?v=v-2yFMzxqwU
# VERSION 1: 17m0s

Class PatentJob
  def run
    temp = download_file
    rows = parse(temp)
    update_patents(rows)
  end

  def download_file
    temp = Tempfile.new('patents')
    tempname = temp.path
    temp.close
    Net::FTP.open('localhost', 'foo', 'foopw') do |ftp|
      ftp.getbinaryfile('Public/prod/patents.csv', tempname)
    end
    tempname
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

