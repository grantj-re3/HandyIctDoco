# Character encoding

## Unicode and UTF-8

Unicode in a nutshell:
- Unicode is a standard which combines many of the world's writing
  systems into a single representation.
- Each character is represented by a "code point" in the form "U+"
  a hexadecimal number (eg. "z" has the code point U+007A).
- Code points within Unicode do not specify any particular character
  encoding (or pattern of bits/bytes). To do that you need to use a
  character encoding such as UTF-8, UTF-16 or UTF-32.
- UTF-8 represents unicode characters as several bytes (the minimum
  being a single byte).
- The first 128 characters in a single byte of UTF-8 are identical
  to the ASCII character set.
- Unicode is not perfect and does not have a representation for all
  characters in all languages. I gather that some characters in some
  other character encodings do not have a representation in Unicode.

### Links
- [Unicode Wikipedia page](https://en.wikipedia.org/wiki/Unicode)
- [UTF-8 Wikipedia page](https://en.wikipedia.org/wiki/UTF-8)
- [Unicode table](http://unicode-table.com/en/)
- [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text by David C. Zentgraf](http://kunststube.net/encoding/)
- [UTF-8: The Secret of Character Encoding by htmlpurifier.org](http://htmlpurifier.org/docs/enduser-utf8.html)
- [Shift-JIS & UTF-8 by Hiroshi](http://david.latapie.name/blog/shift-jis-utf-8/)

## Character encoding tools
- [iconv (linux man page)](http://linux.die.net/man/1/iconv)

## Computer-language specific character encoding tips
- [3 Steps to Fix Encoding Problems in Ruby by Justin Weiss](http://www.justinweiss.com/articles/3-steps-to-fix-encoding-problems-in-ruby/)
- [Ruby 1.9 Encodings: A Primer and the Solution for Rails by Yehuda Katz](http://yehudakatz.com/2010/05/05/ruby-1-9-encodings-a-primer-and-the-solution-for-rails/)
