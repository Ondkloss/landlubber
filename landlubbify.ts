import {
  synonyms,
  definitions,
  resolutions,
  video,
  audio,
  hardcoded
} from "./library";

class Details {
  originalName: string;
  name?: string;
  year?: number;
  source?: string;
  sourceDescription?: string;
  resolution?: string;
  video?: string;
  audio?: string;
  size?: string;
  group?: string;
  hardcodedSubtitles?: boolean;

  public constructor(pirateSpeak: string) {
    this.originalName = pirateSpeak;
    this.setInternals();
  }

  private setInternals() {
    const pieces = tokenize(this.originalName);

    // Source
    for (let i = 0; i < pieces.length; i++) {
      const piece = pieces[i].toLowerCase();
      if (piece in synonyms) {
        this.source = synonyms[piece];
        this.sourceDescription = definitions[this.source];
        break;
      }
    }

    // Year
    let yearIndex = 0;
    for (let i = 0; i < pieces.length; i++) {
      const piece = pieces[i].toLowerCase();
      const value = parseInt(piece);
      if (!isNaN(value) && value >= 1900 && value <= new Date().getFullYear()) {
        this.year = value;
        yearIndex = i;
        break;
      }
    }

    // Resolution
    this.resolution = findTerm(resolutions, pieces);

    // Video
    this.video = findTerm(video, pieces);

    // Audio
    this.audio = findTerm(audio, pieces);

    // Hardcoded?
    this.hardcodedSubtitles = !!findTerm(hardcoded, pieces);

    // Name
    if (yearIndex) this.name = pieces.slice(0, yearIndex).join(" ");

    // Group
    this.group = pieces[pieces.length - 1];
  }

  public toString(): string {
    return JSON.stringify(this, null, 2);
  }
}

export function landlubbify(pirateSpeak: string): Details {
  return new Details(pirateSpeak);
}

function findTerm(terms: string[], pieces: string[]): string | undefined {
  for (const piece of pieces) {
    const lowerPiece = piece.toLowerCase();
    if (terms.includes(lowerPiece)) {
      return piece;
    }
  }

  return undefined;
}

function tokenize(value: string): string[] {
  let tokens = value.split(/[ .]/); // Split on dot or space

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i].length > 2 &&
      tokens[i].charAt(0) == "[" &&
      tokens[i].charAt(tokens[i].length - 1) == "]"
    ) {
      tokens[i] = tokens[i].substring(1, tokens[i].length - 1);
    }
    if (
      tokens[i].length > 2 &&
      tokens[i].charAt(0) == "(" &&
      tokens[i].charAt(tokens[i].length - 1) == ")"
    ) {
      tokens[i] = tokens[i].substring(1, tokens[i].length - 1);
    }
    tokens[i] = tokens[i].trim();
  }

  return tokens;
}
