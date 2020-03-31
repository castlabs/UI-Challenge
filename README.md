Basic Metadata Builder Tool
===========================

At castLabs, we participate in the construction and implementation industry standards. The challenge
is to build a data entry tool for the MovieLabs Common Metadata standard. The tool must
enable a non-technical user to enter descriptive content metadata for a title
(movie, tv series, video game, etc...) and preview the result as a BasicMetadata XML object.

- [Common Metadata Specification](https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf)
- [BasicMetadata Schema](https://movielabs.com/md/md/v2.7/md-v2.7/md-v2.7.html#Link9)

## Functional Requirements

The tool must implement data entry and validation for (at least) the following fields:

1) `md:BasicMetadata/@ContentID` - an [EIDR-ID](https://tools.ietf.org/html/rfc7302) formatted URN
2) `md:BasicMetadata/md:LocalizedInfo/@language` - an [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/English_list.php) formatted language code
3) `md:BasicMetadata/md:LocalizedInfo/@default` - a boolean indicating if this is the default language in which the localized info should be displayed
4) `md:BasicMetadata/md:LocalizedInfo/md:TitleDisplay60` - the title of the asset up to 60 characters in length
5) `md:BasicMetadata/md:LocalizedInfo/md:TitleSort` - a version of the asset title which is used to sort (e.g. titles starting with "the" are usually sorted by the second word: "Hangover, The")
6) `md:BasicMetadata/md:LocalizedInfo/md:ArtReference/@resolution` - the resolution of the image in the format "\<width\>x\<height\>"
7) `md:BasicMetadata/md:LocalizedInfo/md:ArtReference` - An absolute URL for a given piece of digital art (movie poster, etc...)
8) `md:BasicMetadata/md:ReleaseYear` - a 4 digit release year
9) `md:BasicMetadata/md:WorkType` - one of [ SEASON, SERIES, EPISODE, or MOVIE ]

**Note:** Please carefully consider the specification to ensure the multiplicity and cardinality of fields.

The tool should also implement preview functionality, enabling the user to preview the BasicMetadata XML object they are creating.

For Example:

```xml
<md:BasicMetadata xmlns:md="http://www.movielabs.com/schema/md/v2.7/md" ContentID="urn:eidr:10.5240:7791-8534-2C23-9030-8610-5">
    <md:LocalizedInfo default="true" language="EN">
        <md:TitleDisplay60>The Name of a Movie</md:TitleDisplay60>
        <md:ArtReference resolution="224x320">https://via.placeholder.com/224x320</md:ArtReference>
        <md:ArtReference resolution="800x1200">https://via.placeholder.com/800x1200</md:ArtReference>
    </md:LocalizedInfo>
    <md:LocalizedInfo language="ES">
        <md:TitleDisplay60>El Nombre de una Pelicula</md:TitleDisplay60>
        <md:ArtReference resolution="224x320">https://via.placeholder.com/224x320</md:ArtReference>
        <md:ArtReference resolution="800x1200">https://via.placeholder.com/800x1200</md:ArtReference>
    </md:LocalizedInfo>
    <md:ReleaseYear>2019</md:ReleaseYear>
    <md:WorkType>MOVIE</md:WorkType>
</md:BasicMetadata>
```

## Bonus points

1. Include an emulator mode, to emulate the look and feel of the asset metadata as it may be represented in a retailers digital storefront, e.g.: [Reference](https://www.flixstervideo.com/movies/pride-prejudice/urn:dece:cid:eidr-s:777C-E3FE-6FE0-83DA-315F-R)
2. Implement backend for CRUD operations
3. Provide Selenium tests


## Rules

Please implement the UI as a Single Page App using any one of React, Vue or Angular frameworks, you are free to use any other packages you wish. The solution
should be submitted as a Git repository and should be runnable using a make target:

```bash
$ make run-ui
```

This command should start a dev server on port `http://localhost:9000` from which we can explore the tool.

This repository provides a Dockerfile with a Node.js runtime environment, to set this up please have Docker installed on your
machine, then run ```make build install```. To install any additional packages, you can run ```docker-compose run --rm md-ui npm install ...```
