# AsciiDoc format

AsciiDoc is a plain text (ASCII) documentation format which can be read
intuitively in raw format since it uses simple markup. It can also be
processed to produce other formats including:
- ebook formats, PDF and epub
- HTML pages
- man pages

For example, the Pro Git 2nd Edition ebook was written in this format.
See http://git-scm.com/book/en/v2 and https://github.com/progit/progit2

This documentation format is processed by Asciidoctor and the original
AsciiDoc tool. See http://asciidoctor.org/#authors

## Asciidoctor tool (Ruby based; newer)

Asciidoctor is a drop-in replacement for the original AsciiDoc Python
processor.

Can be processed in Ruby, Java VM and JavaScript environments.

- Home page: http://asciidoctor.org/
- Introduction: http://asciidoctor.org/docs/what-is-asciidoc/
- Quick reference: http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/
- Command Line Interface: http://asciidoctor.org/docs/user-manual/#using-the-command-line-interface
- User Manual, Appendix A: Comparison of Asciidoctor and AsciiDoc
  Features (Asciidoctor does not support music):
  http://asciidoctor.org/docs/user-manual/#asciidoctor-vs-asciidoc
- User Manual, Math Equations and Formulas: http://asciidoctor.org/docs/user-manual/#stem
- http://asciidoctor.org/docs/asciidoc-writers-guide/
- MIT license: https://github.com/asciidoctor/asciidoctor/blob/master/LICENSE.adoc

### Creating PDF and EPUB documents

The Pro Git rakefile at
https://github.com/progit/progit2/blob/338f2f267351c9d26324510ba7fe1a77681fdd23/Rakefile#L25
seems to use the following (alpha) tools to produce PDF, EPub and Mobi formats.

- Alpha software: http://asciidoctor.org/docs/convert-asciidoc-to-pdf/
- Alpha software: http://asciidoctor.org/docs/convert-asciidoc-to-epub/

## AsciiDoc tool (Python based; original/older)

Seems active until Version 8.6.9 (2013-11-09)

- Home page: http://www.methods.co.nz/asciidoc/index.html
- User guide: http://www.methods.co.nz/asciidoc/asciidoc.css-embedded.html
- Man page: http://www.methods.co.nz/asciidoc/manpage.html
- Man page: http://www.methods.co.nz/asciidoc/a2x.1.html
- Mathematical Formulae: http://www.methods.co.nz/asciidoc/index.html#X3
- Music support: http://www.methods.co.nz/asciidoc/music-filter.html
- GPLv2 license: http://www.methods.co.nz/asciidoc/index.html#_introduction

### Creating PDF and EPUB documents

- http://www.methods.co.nz/asciidoc/publishing-ebooks-with-asciidoc.html


## My Fedora 20 tinkering...

I already have ruby and gem installed.

```
$ gem -v
2.1.11
$ ruby -v
ruby 2.0.0p247 (2013-06-27 revision 41674) [x86_64-linux]
```

### Attempt 1 - RPM install (not recommended)

As root:
```
$ yum -y install rubygem-asciidoctor rubygem-asciidoctor-doc
$ asciidoctor -v		# 0.1.4
```

This works fine if you do not intend to produce PDF or EPubs using
the respective apps installed via gem and you are happy to have an
older version of asciidoctor. However I did a __yum erase__ of these
RPMs then did commands below.

### Attempt 2 - GEM install (recommended)

As root:
```
# Installs 20 or so dependencies including asciidoctor
$ gem install --pre asciidoctor-pdf
$ asciidoctor -v		# 1.5.2
$ asciidoctor-pdf -v		# 1.5.0.alpha.9

```

As unprivileged user, I created test1.adoc, then did:
```
$ asciidoctor -v
$ asciidoctor -h
$ asciidoctor test1.adoc
$ asciidoctor -n test1.adoc
$ asciidoctor-pdf -n test1.adoc
```

My [test1.adoc](https://raw.githubusercontent.com/grantj-re3/HandyIctDoco/master/doco-systems/test1.adoc)
produced:
- [test1.html](test1.html).
- [test1.pdf](test1.pdf).

View in web browser at URL file:///path/to/file/test1.html

