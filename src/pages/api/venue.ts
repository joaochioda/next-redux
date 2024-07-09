import type { NextApiRequest, NextApiResponse } from "next";

export interface WebSettings {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

export interface Venue {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: WebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Venue>
) {
  fetch("https://cdn-dev.preoday.com/challenge/venue/9").then((response) => {
    response.json().then((data) => {
      res.status(200).json(data);
    });
  });
}
