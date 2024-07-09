import { NextApiRequest, NextApiResponse } from "next";

interface Image {
  id: number;
  image: string;
}

interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: Modifier[];
  images: Image[];
  available: boolean;
}

interface Section {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible: number;
  images: Image[];
  items: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Menu>
) {
  fetch("https://cdn-dev.preoday.com/challenge/menu").then((response) => {
    response.json().then((data) => {
      res.status(200).json(data);
    });
  });
}
