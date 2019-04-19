Basic Metadata Builder Tool
===========================

At castLabs, we are often asked to build tools to implement industry standards. The challenge
is to build a data entry tool for the MovieLabs Common Metadata standard. The tool must
enable a non-technical user to enter descriptive content metadata for a title
(movie, tv series, video game, etc...) and preview the result as a BasicMetadata XML object.

[Common Metadata Specification](https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf)
[BasicMetadata Schema](https://movielabs.com/md/md/v2.7/md-v2.7/md-v2.7.html#Link9)

## Functional Requirements

The tool must implement data entry and validation for (at least) the following fields:

1) md:BasicMetadata/@ContentID - an [EIDR-ID](https://tools.ietf.org/html/rfc7302) formatted URN
2) md:BasicMetadata/md:LocalizedInfo/@language - an [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/English_list.php) formatted language code
3) md:BasicMetadata/md:LocalizedInfo/md:TitleDisplay60 - the title of the asset up to 60 characters in length
4) md:BasicMetadata/md:LocalizedInfo/md:TitleSort - a version of the asset title which is used to sort (e.g. titles starting with "the" are usually sorted by the second word: "Hangover, The")
5) md:BasicMetadata/md:LocalizedInfo/md:Summary400 - up to 400 character summary of the asset
6) md:BasicMetadata/md:LocalizedInfo/md:Summary190 - up to 190 character summary of the asset
7) md:BasicMetadata/md:LocalizedInfo/md:CopyrightLine - a copyright line indicating the studio who produced the asset and the release year
8) md:BasicMetadata/md:ReleaseYear - a 4 digit release year
9) md:BasicMetadata/md:WorkType - one of [ SEASON, SERIES, EPISODE, or MOVIE ]
10) md:BasicMetadata/md:People/md:Job/md:JobFunction - the name of the persons role in the production
11) md:BasicMetadata/md:People/md:Job/md:Character - the name of the character (if applicable to the role)
12) md:BasicMetadata/md:People/md:Name - the name of the person who worked on the production
13) md:BasicMetadata/md:SequenceInfo/md:Number - (if the work type is SEASON or EPISODE) an integer representing the asset order in the set of sibling assets
14) md:BasicMetadata/md:SequenceInfo/md:Parent/@relationshipType - (if the work type is SEASON or EPISODE) the relationship to the parent asset; one of [ ISEPISODEOF, ISSEASONOF ]
15) md:BasicMetadata/md:SequenceInfo/md:Parent/md:ParentContentID - (if the work type is SEASON or EPISODE) the the content id of the parent work

Please carefully consider the specification to ensure the multiplicity and cardinality of fields.

## Rules

Please implement the UI as a Single Page App using React, you are free to use any other packages you wish. The solution
should be submitted as a Git repository and should be able to run the interface using a make single command:

```bash
$ make run-ui
```

This command should start a dev server on port http://localhost:9000 from which we can explore the tool.

This repository provides a Dockerfile with a Node.js runtime environment, to set this up please have Docker installed on your
machine, then run ```make build install```. To install any additional packages, you can run ```docker-compose run --rm md-ui npm install ...```
