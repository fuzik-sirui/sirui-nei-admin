export default {
    getMds(req, res) {
        res.json({
            datatypes: [{
                key: 1,
                name: 'John',
                type: 'number',
                desc: 'descrption',
                default: "",
                rule: '1 Lake Park'
            }, {
                key: 2,
                name: 'Brown',
                type: 'number',
                desc: 'descrption',
                default: "",
                rule: 'London No'
            }, {
                key: 3,
                name: 'Joe',
                type: 'number',
                desc: 'descrption',
                default: "",
                rule: 'London No'
            }]
        }
            //     {
            //     "datatypes": [
            //         {
            //             "type": 2,
            //             "format": 0,
            //             "name": "",
            //             "id": -1,
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "text",
            //                     "required": true,
            //                     "description": "The copyright text for this album.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The type of copyright: C = the copyright, P = the sound recording (performance) copyright.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ]
            //         },
            //         {
            //             "type": 0,
            //             "name": "album",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "album_type",
            //                     "required": true,
            //                     "description": "The type of the album: one of 'album', 'single', or 'compilation'.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "artists",
            //                     "required": true,
            //                     "description": "The artists of the album. Each artist object includes a link in href to more detailed information about the artist.",
            //                     "typeName": "artist"
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "available_markets",
            //                     "required": true,
            //                     "description": "The markets in which the album is available: ISO 3166-1 alpha-2 country codes. Note that an album is considered available in a market when at least 1 of its tracks is available in that market.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "copyrights",
            //                     "required": true,
            //                     "description": "The copyright statements of the album.",
            //                     "type": -1,
            //                     "typeName": "",
            //                     "isObject": true
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "genres",
            //                     "required": true,
            //                     "description": "A list of the genres used to classify the album. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint providing full details of the album.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "id",
            //                     "required": true,
            //                     "description": "The Spotify ID for the album.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "images",
            //                     "required": true,
            //                     "description": "The cover art for the album in various sizes, widest first.",
            //                     "typeName": "image"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "name",
            //                     "required": true,
            //                     "description": "The name of the album.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "popularity",
            //                     "required": true,
            //                     "description": "The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album's individual tracks.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "release_date",
            //                     "required": true,
            //                     "description": "The date the album was first released, for example '1981-12-15'. Depending on the precision, it might be shown as '1981' or '1981-12'.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "release_date_precision",
            //                     "required": true,
            //                     "description": "The precision with which release_date value is known: 'year', 'month', or 'day'.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "tracks",
            //                     "required": true,
            //                     "description": "",
            //                     "typeName": "track-simple-page"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The object type: 'album'.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "uri",
            //                     "required": true,
            //                     "description": "The Spotify URI for the album.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 0,
            //             "name": "artist",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "followers",
            //                     "required": true,
            //                     "description": "",
            //                     "typeName": "followers"
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "genres",
            //                     "required": true,
            //                     "description": "A list of the genres the artist is associated with. For example: 'Prog Rock', 'Post-Grunge'. (If not yet classified, the array is empty.)",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint providing full details of the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "id",
            //                     "required": true,
            //                     "description": "The Spotify ID for the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "images",
            //                     "required": true,
            //                     "description": "Images of the artist in various sizes, widest first.",
            //                     "typeName": "image"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "name",
            //                     "required": true,
            //                     "description": "The name of the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "popularity",
            //                     "required": true,
            //                     "description": "The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The object type: 'artist'",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "uri",
            //                     "required": true,
            //                     "description": "The Spotify URI for the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 0,
            //             "name": "artist-simple",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint providing full details of the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "id",
            //                     "required": true,
            //                     "description": "The Spotify ID for the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "name",
            //                     "required": true,
            //                     "description": "The name of the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The object type: 'artist'",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "uri",
            //                     "required": true,
            //                     "description": "The Spotify URI for the artist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 0,
            //             "name": "followers",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint providing full details of the followers; null if not available.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "total",
            //                     "required": true,
            //                     "description": "The total number of followers.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 }
            //             ],
            //             "format": 0,
            //             "description": "Information about the followers of the artist."
            //         },
            //         {
            //             "type": 0,
            //             "name": "image",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "height",
            //                     "required": true,
            //                     "description": "The image height in pixels. If unknown: null or not returned.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "url",
            //                     "required": true,
            //                     "description": "The source URL of the image.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "width",
            //                     "required": true,
            //                     "description": "The image width in pixels. If unknown: null or not returned.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 2,
            //             "format": 0,
            //             "name": "",
            //             "id": -2,
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint returning the full result of the request.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "total",
            //                     "required": true,
            //                     "description": "The total number of tracks available to return.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 }
            //             ]
            //         },
            //         {
            //             "type": 0,
            //             "name": "playlist-simple",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "collaborative",
            //                     "required": true,
            //                     "description": "True if the owner allows other users to modify the playlist.",
            //                     "typeName": "boolean",
            //                     "type": 10003
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint providing full details of the playlist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "id",
            //                     "required": true,
            //                     "description": "The Spotify ID of the playlist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "images",
            //                     "required": true,
            //                     "description": "The cover art for the album in various sizes, widest first.",
            //                     "typeName": "image"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "name",
            //                     "required": true,
            //                     "description": "The name of the playlist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "owner",
            //                     "required": true,
            //                     "description": "",
            //                     "typeName": "user-profile"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "public",
            //                     "required": true,
            //                     "description": "The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.",
            //                     "typeName": "boolean",
            //                     "type": 10003
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "snapshot_id",
            //                     "required": true,
            //                     "description": "The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "tracks",
            //                     "required": true,
            //                     "type": -2,
            //                     "typeName": "",
            //                     "isObject": true
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The object type: 'playlist'.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "uri",
            //                     "required": true,
            //                     "description": "Spotify URI of the playlist.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 0,
            //             "name": "playlist-simple-page",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint returning the full result of the request.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "items",
            //                     "required": true,
            //                     "description": "The requested data.",
            //                     "typeName": "playlist-simple"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "limit",
            //                     "required": true,
            //                     "description": "The maximum number of items in the response (as set in the query or by default).",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "next",
            //                     "required": true,
            //                     "description": "URL to the next page of items. (null if none)",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "offset",
            //                     "required": true,
            //                     "description": "The offset of the items returned (as set in the query or by default).",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "previous",
            //                     "required": true,
            //                     "description": "URL to the previous page of items. (null if none)",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "total",
            //                     "required": true,
            //                     "description": "The total number of items available to return.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 0,
            //             "name": "playlist-snapshot",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "snapshot_id",
            //                     "required": true,
            //                     "description": "The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 2,
            //             "format": 0,
            //             "name": "",
            //             "id": -4,
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "name",
            //                     "required": true,
            //                     "description": "The type of the URL, for example: 'spotify' - The Spotify URL for the object.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ]
            //         },
            //         {
            //             "type": 2,
            //             "format": 0,
            //             "name": "",
            //             "id": -3,
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "recursiveObj",
            //                     "required": true,
            //                     "description": "Known external URLs for this track.",
            //                     "type": -4,
            //                     "typeName": "",
            //                     "isObject": true
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint providing full details of the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "id",
            //                     "required": true,
            //                     "description": "The Spotify ID for the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The object type: 'track'.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "uri",
            //                     "required": true,
            //                     "description": "The Spotify URI for the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ]
            //         },
            //         {
            //             "type": 0,
            //             "name": "track-simple",
            //             "params": [
            //                 {
            //                     "isArray": true,
            //                     "name": "artists",
            //                     "required": true,
            //                     "description": "The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.",
            //                     "typeName": "artist-simple"
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "available_markets",
            //                     "required": true,
            //                     "description": "A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code. ",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "disc_number",
            //                     "required": true,
            //                     "description": "The disc number (usually 1 unless the album consists of more than one disc).",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "duration_ms",
            //                     "required": true,
            //                     "description": "The track length in milliseconds.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "explicit",
            //                     "required": true,
            //                     "description": "Whether or not the track has explicit lyrics (true = yes it does; false = no it does not OR unknown).",
            //                     "typeName": "boolean",
            //                     "type": 10003
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint providing full details of the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "id",
            //                     "required": true,
            //                     "description": "The Spotify ID for the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "is_playable",
            //                     "required": true,
            //                     "description": "Part of the response when Track Relinking is applied. If true, the track is playable in the given market. Otherwise false.",
            //                     "typeName": "boolean",
            //                     "type": 10003
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "linked_from",
            //                     "required": true,
            //                     "description": "Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.",
            //                     "type": -3,
            //                     "typeName": "",
            //                     "isObject": true
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "name",
            //                     "required": true,
            //                     "description": "The name of the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "preview_url",
            //                     "required": true,
            //                     "description": "A URL to a 30 second preview (MP3 format) of the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "track_number",
            //                     "required": true,
            //                     "description": "The number of the track. If an album has several discs, the track number is the number on the specified disc.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The object type: 'track'.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "uri",
            //                     "required": true,
            //                     "description": "The Spotify URI for the track.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 0,
            //             "name": "track-simple-page",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint returning the full result of the request.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": true,
            //                     "name": "items",
            //                     "required": true,
            //                     "description": "The requested data.",
            //                     "typeName": "track-simple"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "limit",
            //                     "required": true,
            //                     "description": "The maximum number of items in the response (as set in the query or by default).",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "next",
            //                     "required": true,
            //                     "description": "URL to the next page of items. (null if none)",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "offset",
            //                     "required": true,
            //                     "description": "The offset of the items returned (as set in the query or by default).",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "previous",
            //                     "required": true,
            //                     "description": "URL to the previous page of items. (null if none)",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "total",
            //                     "required": true,
            //                     "description": "The total number of items available to return.",
            //                     "typeName": "integer",
            //                     "type": 10002
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 0,
            //             "name": "user-profile",
            //             "params": [
            //                 {
            //                     "isArray": false,
            //                     "name": "displayName",
            //                     "required": true,
            //                     "description": "The name displayed on the user's profile.",
            //                     "typeName": "string",
            //                     "type": 10001,
            //                     "defaultValue": "name"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "followers",
            //                     "required": true,
            //                     "description": "",
            //                     "typeName": "followers"
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "href",
            //                     "required": true,
            //                     "description": "A link to the Web API endpoint for this user.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "id",
            //                     "required": true,
            //                     "description": "The Spotify ID for this user.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "type",
            //                     "required": true,
            //                     "description": "The object type: 'user'",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 },
            //                 {
            //                     "isArray": false,
            //                     "name": "uri",
            //                     "required": true,
            //                     "description": "The Spotify URI for the user.",
            //                     "typeName": "string",
            //                     "type": 10001
            //                 }
            //             ],
            //             "format": 0,
            //             "description": ""
            //         },
            //         {
            //             "type": 2,
            //             "format": 0,
            //             "name": "",
            //             "id": -5,
            //             "params": [
            //                 {
            //                     "isArray": true,
            //                     "name": "uris",
            //                     "required": true,
            //                     "description": "",
            //                     "type": 10000
            //                 }
            //             ]
            //         }
            //     ],
            //     "interfaces": [
            //         {
            //             "params": {
            //                 "inputs": [
            //                     {
            //                         "isArray": false,
            //                         "name": "ids",
            //                         "required": true,
            //                         "description": "A comma-separated list of IDs",
            //                         "typeName": "string",
            //                         "type": 10001
            //                     },
            //                     {
            //                         "isArray": false,
            //                         "name": "market",
            //                         "required": false,
            //                         "description": "The market (an ISO 3166-1 alpha-2 country code)",
            //                         "typeName": "string",
            //                         "type": 10001,
            //                         "defaultValue": "test"
            //                     }
            //                 ],
            //                 "outputs": [
            //                     {
            //                         "isArray": true,
            //                         "name": "albums",
            //                         "required": true,
            //                         "description": "",
            //                         "typeName": "album"
            //                     }
            //                 ]
            //             },
            //             "name": "get:/albums",
            //             "method": "GET",
            //             "description": "[Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/)\n",
            //             "path": "/v1/albums",
            //             "tags": ""
            //         },
            //         {
            //             "params": {
            //                 "inputs": [
            //                     {
            //                         "isArray": false,
            //                         "name": "ids",
            //                         "required": true,
            //                         "description": "A comma-separated list of IDs",
            //                         "typeName": "string",
            //                         "type": 10001
            //                     }
            //                 ],
            //                 "outputs": [
            //                     {
            //                         "isArray": true,
            //                         "name": "artists",
            //                         "required": true,
            //                         "description": "",
            //                         "typeName": "artist"
            //                     }
            //                 ]
            //             },
            //             "name": "get:/artists",
            //             "method": "GET",
            //             "description": "[Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/)\n",
            //             "path": "/v1/artists",
            //             "tags": ""
            //         },
            //         {
            //             "params": {
            //                 "inputs": [
            //                     {
            //                         "isArray": false,
            //                         "name": "limit",
            //                         "required": false,
            //                         "description": "The maximum number of items to return",
            //                         "typeName": "integer",
            //                         "type": 10002,
            //                         "defaultValue": "20"
            //                     },
            //                     {
            //                         "isArray": false,
            //                         "name": "offset",
            //                         "required": false,
            //                         "description": "The index of the first item to return",
            //                         "typeName": "integer",
            //                         "type": 10002
            //                     },
            //                     {
            //                         "isArray": false,
            //                         "name": "country",
            //                         "required": false,
            //                         "description": "The country (an ISO 3166-1 alpha-2 country code)",
            //                         "typeName": "string",
            //                         "type": 10001
            //                     }
            //                 ],
            //                 "outputs": [
            //                     {
            //                         "isArray": false,
            //                         "name": "playlists",
            //                         "required": true,
            //                         "description": "",
            //                         "typeName": "playlist-simple-page"
            //                     }
            //                 ]
            //             },
            //             "name": "get:/browse/categories/{category_id}/playlists",
            //             "method": "GET",
            //             "description": "[Get a Category's playlists](https://developer.spotify.com/web-api/get-categorys-playlists/)\n",
            //             "path": "/v1/browse/categories/:category_id/playlists",
            //             "tags": ""
            //         },
            //         {
            //             "params": {
            //                 "inputs": [
            //                     {
            //                         "isArray": false,
            //                         "name": "body",
            //                         "required": true,
            //                         "type": -5,
            //                         "typeName": "",
            //                         "isObject": true
            //                     }
            //                 ],
            //                 "outputs": [
            //                     {
            //                         "isArray": false,
            //                         "name": "snapshot_id",
            //                         "required": true,
            //                         "description": "The version identifier for the modified playlist. Can be supplied in other requests to target a specific playlist version.",
            //                         "typeName": "string",
            //                         "type": 10001,
            //                         "datatypeName": "playlist-snapshot"
            //                     }
            //                 ]
            //             },
            //             "name": "post:/users/{user_id}/playlists/{playlist_id}/tracks",
            //             "method": "POST",
            //             "description": "[Reorder or replace a Playlist's Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/)\n",
            //             "path": "/v1/users/:user_id/playlists/:playlist_id/tracks",
            //             "tags": ""
            //         }
            //     ]
            // }
        )
    }
}