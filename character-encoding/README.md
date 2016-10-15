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
- [Unicode](https://en.wikipedia.org/wiki/Unicode) Wikipedia page
- [UTF-8](https://en.wikipedia.org/wiki/UTF-8) Wikipedia page
- [Unicode table](http://unicode-table.com/en/)
- [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](http://kunststube.net/encoding/) by David C. Zentgraf
- [UTF-8: The Secret of Character Encoding](http://htmlpurifier.org/docs/enduser-utf8.html) by htmlpurifier.org
- [Shift-JIS & UTF-8](http://david.latapie.name/blog/shift-jis-utf-8/) by Hiroshi

## Character encoding tools
- [iconv](http://linux.die.net/man/1/iconv) linux man page

## Computer-language specific character encoding tips
- [3 Steps to Fix Encoding Problems in Ruby](http://www.justinweiss.com/articles/3-steps-to-fix-encoding-problems-in-ruby/) by Justin Weiss
- [Ruby 1.9 Encodings: A Primer and the Solution for Rails](http://yehudakatz.com/2010/05/05/ruby-1-9-encodings-a-primer-and-the-solution-for-rails/) by Yehuda Katz

# Language fonts

In a nutshell: Even if your character encoding is correct, blank
rectangular boxes may appear on your screen (or that of your web
page visitor) if you (or they) do not have a font which supports
the characters you are using.

## Unicode fonts

### Links
- [Unicode font](https://en.wikipedia.org/wiki/Unicode_font) Wikipedia page
- [Meet Noto, Google's Free Font for More than 800 Languages](https://www.wired.com/2016/10/meet-noto-googles-free-font-800-languages/) by Liz Stinson, 2016
  * The opening paragraph says:

> SOMETHING FUNNY HAPPENS when your computer or phone can’t
> display a font: A blank rectangular box pops up in place of
> the missing glyph. This little box is called .notdef, or
> “not defined,” in coder lingo, but everyone else just calls
> it tofu.

- [Google Noto Fonts: Beautiful and free fonts for all languages](https://www.google.com/get/noto/) by Google
  * Contains links regarding downloads, installation on several platforms, licence, etc.

