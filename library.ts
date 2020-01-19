// https://en.wikipedia.org/wiki/Pirated_movie_release_types
export const synonyms: { [key: string]: string } = {};
["cam", "camrip"].forEach(value => (synonyms[value] = "Cam"));
["ts", "hdts", "telesync", "pdvd", "predvdrip"].forEach(
  value => (synonyms[value] = "Telesync")
);
["wp", "workprint"].forEach(value => (synonyms[value] = "Workprint"));
["tc", "hdtc", "telecine"].forEach(value => (synonyms[value] = "Telecine"));
["ppv", "ppvrip"].forEach(value => (synonyms[value] = "Pay-Per-View Rip"));
["scr", "screener", "dvdscr", "dvdscreener", "bdscr"].forEach(
  value => (synonyms[value] = "Screener")
);
["ddc"].forEach(value => (synonyms[value] = "Digital Distribution Copy"));
["r5", "r5.line", "r5.ac3.5.1.hq"].forEach(value => (synonyms[value] = "R5"));
["dvdrip", "dvdmux"].forEach(value => (synonyms[value] = "DVD Rip"));
["dvdr", "dvd-full", "full-rip"].forEach(value => (synonyms[value] = "DVD-R"));
[
  "dsr",
  "dsrip",
  "satrip",
  "dthrip",
  "dvbrip",
  "hdtv",
  "pdtv",
  "dtvrip",
  "tvrip",
  "hdtvrip"
].forEach(value => (synonyms[value] = "TV Rip"));
["vodrip", "vodr"].forEach(value => (synonyms[value] = "VOD Rip"));
["webdl", "webdlrip", "web-dl", "webdl-rip", "hdrip"].forEach(
  value => (synonyms[value] = "WEB-DL")
);
["webrip", "web-rip", "web"].forEach(value => (synonyms[value] = "Web Rip"));
["webcap", "web-cap"].forEach(value => (synonyms[value] = "Web Cap"));
[
  "blu-ray",
  "bluray",
  "bdrip",
  "brip",
  "brrip",
  "bdmv",
  "bdr",
  "bd25",
  "bd50",
  "bd5",
  "bd9"
].forEach(value => (synonyms[value] = "Blu-ray Rip"));

export const definitions: { [key: string]: string } = {};
definitions["Cam"] =
  "A copy made in a cinema using a camcorder or mobile phone. The sound source is the camera microphone. Cam rips can quickly appear online after the first preview or premiere of the film. The quality ranges from subpar to adequate, depending on the group of persons performing the recording and the resolution of the camera used. The main disadvantage of this is the sound quality. The microphone does not only record the sound from the movie, but also the background sound in the cinema. The camera can also record movements and audio of the audience in the theater, for instance, when someone stands up in front of the screen, or when the audience laughs at a funny moment in the movie.";
definitions["Telesync"] =
  "A telesync (TS) is a bootleg recording of a film recorded in a movie theater, sometimes filmed using a professional camera on a tripod in the projection booth. The main difference between a CAM and TS copy is that the audio of a TS is captured with a direct connection to the sound source (often an FM microbroadcast provided for the hearing-impaired, or from a drive-in theater). Often, a cam is mislabeled as a telesync. HDTS is used to label a High-definition video recording.";
definitions["Workprint"] =
  "A copy made from an unfinished version of a film produced by the studio. Typically a workprint has missing effects and overlays, and differs from its theatrical release. Some workprints have a time index marker running in a corner or on the top edge; some may also include a watermark. A workprint might be an uncut version, and missing some material that would appear in the final movie (or including scenes later cut).";
definitions["Telecine"] =
  "A copy captured from a film print using a machine that transfers the movie from its analog reel to digital format. These were rare because telecine machines for making these prints were very costly and very large. However, they have recently become much more common. Telecine has basically the same quality as DVD, since the technique is the same as digitizing the actual film to DVD. However, the result is inferior since the source material is usually a lower quality copy reel. Telecine machines usually cause a slight left-right jitter in the picture and have inferior color levels compared to DVD. HDTC is used to label a High-definition video recording.";
definitions["Pay-Per-View Rip"] =
  "PPVRips come from Pay-Per-View sources. All the PPVRip releases are brand new movies which have not yet been released to Screener or DVD, but are available for viewing by customers with high-end TV package deals.";
definitions["Screener"] =
  'These are early DVD or BD releases of the theatrical version of a film, typically sent to movie reviewers, Academy members, and executives for review purposes. A screener normally has a message overlaid on its picture, with wording similar to: "The film you are watching is a promotional copy. If you purchased this film at a retail store, please contact 1-800-NO-COPIES to report it." or more commonly if released for awards consideration simply, "FOR YOUR CONSIDERATION." Apart from this, some movie studios release their screeners with a number of scenes of varying duration shown in black-and-white. Aside from this message, and the occasional B&W scenes, screeners are normally of only slightly lower quality than a retail DVD-Rip, due to the smaller investment in DVD mastering for the limited run. Some screener rips with the overlay message get cropped to remove the message and get released mislabeled as DVD-Rips. Note: Screeners make a small exception here—since the content may differ from a retail version, it can be considered as lower quality than a DVD-Rip (even if the screener in question was sourced from a DVD).';
definitions["Digital Distribution Copy"] =
  "A digital distribution copy (DDC) is basically the same as a Screener, but sent digitally (FTP, HTTP, etc.) to companies instead of via the postal system. This makes distribution cheaper. Its quality is lower than one of a R5, but higher than a Cam or Telesync. In the warez scene DDC refers to Downloadable/Direct Digital Content which is not freely available.";
definitions["R5"] =
  "What is known as an R5 is a studio produced unmastered telecine put out quickly and cheaply to compete against telecine piracy in Russia. The R5 tag refers to the DVD region 5 which consists of Russia, the Indian subcontinent, most of Africa, North Korea, and Mongolia. R5 releases differ from normal releases in that they are a direct Telecine transfer of the film without any of the image processing. If the DVD does not contain an English-language audio track, the R5 video is synced to a previously released English audio track. Then a LiNE tag is added. This means that the sound often is not as good as DVD-Rips. To account for the lesser audio quality typically present in R5 releases, some release groups take the high quality Russian or Ukrainian 5.1 channel audio track included with the R5 DVD and modify it with audio editing software. They remove the non-English spoken portion of the audio and sync the remaining portion, which contains high quality sound effects and music with a previously recorded source of English vocals usually taken from a LiNE tagged release. The result of this process is an almost retail DVD quality surround sound audio track which is included in the movie release. Releases of this type are normally tagged AC3.5.1.HQ and details about what was done to the audio track as well as the video are present in the release notes accompanying the pirated movie.";
definitions["DVD Rip"] =
  'A final retail version of a film, typically released before it is available outside its originating region. Often after one group of pirates releases a high-quality DVD-Rip, the "race" to release that film will stop. The release is an AVI file and uses the XviD codec (some in DivX) for video, and commonly mp3 or AC3 for audio. Because of their high quality, DVD-Rips generally replace any earlier copies that may already have been circulating. Widescreen DVDs used to be indicated as WS.DVDRip. DVDMux differs from DVDRips as they tend to use the x264 codec for video, AAC or AC3 codec for audio and multiplex it on a .mp4/.mkv file.';
definitions["DVD-R"] =
  "A final retail version of a film in DVD format, generally a complete copy from the original DVD. If the original DVD is released in the DVD-9 format, however, extras might be removed and/or the video reencoded to make the image fit the less expensive for burning and quicker to download DVD-5 format. DVD-R releases often accompany DVD-Rips. DVD-R rips are larger in size, generally filling up the 4.37 or 7.95 GiB provided by DVD-5 and DVD-9 respectively. Untouched or lossless rips in the strictest sense are 1:1 rips of the source, with nothing removed or changed, though often the definition is lightened to include DVDs which have not been transcoded, and no features were removed from the user's perspective, removing only restrictions and possible nuisances such as copyright warnings and movie previews.";
definitions["TV Rip"] =
  "TVRip is a capture source from an analog capture card (coaxial/composite/s-video connection). Digital satellite rip (DSR, also called SATRip or DTH) is a rip that is captured from a non-standard definition digital source like satellite. HDTV stands for captured source from HD television, while PDTV (Pure Digital TV) stands for any SDTV rip captured using solely digital methods from the original transport stream, not from HDMI or other outputs from a decoder, it can also refer to any standard definition content broadcast on a HD channel. DVB rips often come from free-the-air transmissions (such as digital terrestrial television). With an HDTV source, the quality can sometimes even surpass DVD. Movies in this format are starting to grow in popularity. Some advertisement and commercial banner can be seen on some releases during playback. Analog, DSR, and PDTV sources used to be often reencoded to 512×384 if fullscreen, currently to 640x480 if fullscreen and 720x404 if widescreen. HDTV sources are reencoded to multiple resolutions such as 720x404 (360p), 960×540 (540p), 1280×720 (720p), and 1920x1080 (1080p) at various file sizes for pirated releases. They can be progressive scan captured or not (480i digital transmission or 1080i broadcast for HD caps).";
definitions["VOD Rip"] =
  "VODRip stands for Video-On-Demand Rip. This can be done by recording or capturing a video/movie from an On-Demand service such as through a cable or satellite TV service. Most services will state that ripping or capturing films is a breach of their use policy, but it is becoming more and more popular as it requires little technology or setup. There are many online On-Demand services that would not require one to connect their TV and computer. It can be done by using software to identify the video source address and downloading it as a video file which is often the method that bears the best quality end result. However, some people have used screen cams which effectively record, like a video camera, what is on a certain part of the computer screen, but does so internally, making the quality not of HD quality, but nevertheless significantly better than a Cam or Telesync version filmed from a cinema, TV or computer screen.";
definitions["WEB-DL"] =
  "A file losslessly ripped from a streaming service, such as Netflix, Amazon Video, Hulu, Crunchyroll, Discovery GO, BBC iPlayer, etc., or downloaded via an online distribution website such as iTunes. The quality is quite good, since they are not reencoded. The video (H.264 or H.265) and audio (AC3/AAC) streams are usually extracted from the iTunes or Amazon Video and remuxed into a MKV container without sacrificing quality. An advantage with these releases is that, like BD/DVDRips, they usually have no onscreen network logos. HDRips are typically transcoded versions of HDTV or WEB-DL source files, but may be any type of HD transcode.";
definitions["Web Rip"] =
  "The file is often extracted using the HLS or RTMP/E protocols and remuxed from a TS, MP4 or FLV container to MKV.";
definitions["Web Cap"] =
  "This is a rip created by capturing video from a DRM-enabled streaming service, such as Amazon Instant or Netflix. Quality can range from mediocre (comparable with low quality XVID encodes) to excellent (comparable with high quality BR encodes). Essentially, the quality of the image obtained depends on internet connection speed and the specifications of the recording machine. WEBCaps are often labeled as WEBRips, with a note attached by the encoder to let others know it was capped & encoded instead of losslessly remuxed.";
definitions["Blu-ray Rip"] =
  "Blu-ray or Bluray rips are encoded directly from the Blu-ray disc to 1080p or 720p (depending on disc source), and use the x264 or x265 codec. They can be ripped from BD25 or BD50 discs (or UHD Blu-ray at higher resolutions). BDRips are from a Blu-ray disc and encoded to a lower resolution from its source (i.e. 1080p to 720p/576p/480p). BRRips are an already encoded video at HD resolution that is then transcoded to an SD resolution. BRRips are only from an HD resolution to a SD resolution whereas BDRips can go from 2160p to 1080p, etc as long as they go downward in resolution of the source disc. BDRips are not a transcode, but BRRips are. BD/BRRips in DVDRip resolutions can vary between XviD/x264/x265 codecs (commonly 700 MB and 1.5 GB in size as well as larger DVD5 or DVD9: 4.5 GB or 8.4GB). Size fluctuates depending on length and quality of releases, but the higher the size the more likely they use the x264/x265 codecs. A BD/BRRip to DVDRip resolution looks better, regardless, because the encode is from a higher quality source. BDRips and BRRips are often confused with each other, but have followed the above guideline after Blu-ray replaced BDRip title structure in scene releases. Full BD25/BD50 data rips also exist, and are similar to their counterpart DVD5/DVD9 full data releases. They are AVCHD compatible using the BD folder structure (sometimes called Bluray RAW/m2ts/iso), and are usually intended to be burnt back to disk for play in AVCHD-compatible Blu-ray players. BD25/BD50 data rips may or may not be remuxed and are never transcoded.";

export const video: string[] = ["xvid", "divx", "hevc", "x265", "x264", "h264"];

export const audio: string[] = ["ac3", "aac", "mp3", "truehd", "dts", "flac"];

export const resolutions: string[] = ["480p", "720p", "1080p", "2160p"];

export const hardcoded: string[] = ["hc", "hardcoded"];
