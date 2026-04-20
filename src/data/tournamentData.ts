export type Team = {
  name: string;
  file: string;
  owners: string[];
  icons: string[];
};

export type Sponsor = {
  tier: string;
  name: string;
  file: string;
  note: string;
};

export const tournament = {
  name: "JCTT Mega Cricket Turf Tournament",
  hashtag: "#JCTT2026",
  season: "Season 2026",
  venue: "Wilson Gymkhana, Marine Drive, Mumbai",
  dates: "23-24 May 2026",
  format: "16 Teams | 8 Overs | League + Knockout"
};

export const teams: Team[] = [
  {
    name: "Shree Nakoda X1",
    file: "IMG_3688.JPG.jpeg",
    owners: ["Praful Mehta", "Vijay Jodhavat"],
    icons: ["Daksh Bhandari", "Praful Mehta"]
  },
  {
    name: "Jai Gurudev",
    file: "WhatsApp Image 2026-04-18 at 12.32.59 PM (1).jpeg",
    owners: ["Rakesh Chopra"],
    icons: ["Pending"]
  },
  {
    name: "Power Hitters",
    file: "WhatsApp Image 2026-04-18 at 12.32.59 PM.jpeg",
    owners: ["Abhisek Jain"],
    icons: ["Dixit Haran", "Bhavik Ranka"]
  },
  {
    name: "Seth Motisha Tuskers",
    file: "WhatsApp Image 2026-04-18 at 12.33.00 PM.jpeg",
    owners: ["Hitesh Jain", "Dushyant Jain", "Mitesh Jain"],
    icons: ["Ashwin Jain", "Dushyant Jain"]
  },
  {
    name: "HBD Warriors",
    file: "WhatsApp Image 2026-04-18 at 12.33.01 PM (1).jpeg",
    owners: ["Rahul Bohra", "Avkash Haran", "Rishabh Doshi"],
    icons: ["Avkash Haran", "Ashwin Mehta"]
  },
  {
    name: "Cobra Challengers",
    file: "WhatsApp Image 2026-04-18 at 12.33.01 PM.jpeg",
    owners: ["Rushabh Bhandari"],
    icons: ["Tanmay", "Vishal"]
  },
  {
    name: "Yoana Strikers",
    file: "WhatsApp Image 2026-04-18 at 12.33.02 PM.jpeg",
    owners: ["Saurabh Mehta"],
    icons: ["Dhruv Tejavat", "Ronil Jain"]
  },
  {
    name: "Strikers",
    file: "WhatsApp Image 2026-04-18 at 12.33.03 PM (1).jpeg",
    owners: ["Yagnesh P Kotadia", "Deepak Jain"],
    icons: ["Nitin Mohanalal Jain", "Mohit Pannalal Bohra"]
  },
  {
    name: "Bansal Big Bulls",
    file: "WhatsApp Image 2026-04-20 at 12.37.20 PM.jpeg",
    owners: ["Nishchay Bansal"],
    icons: ["Parv Mehta", "Daksh Jain"]
  },
  {
    name: "NSVL Legends",
    file: "WhatsApp Image 2026-04-18 at 12.33.04 PM (1).jpeg",
    owners: ["Bhavya Solanki", "Nishi Solanki"],
    icons: ["Piyush", "Rudra"]
  },
  {
    name: "Metinox Mavericks",
    file: "WhatsApp Image 2026-04-20 at 12.36.46 PM.jpeg",
    owners: ["Harshil Shah", "Bhavik Doshi"],
    icons: ["Harsh Shah", "Prasham Tated"]
  },
  {
    name: "Wowel Knights",
    file: "WhatsApp Image 2026-04-18 at 12.33.05 PM.jpeg",
    owners: ["Yash Jain"],
    icons: ["Aman Jain Mahim", "Yash Porwal"]
  },
  {
    name: "Parshwanth 11",
    file: "WhatsApp Image 2026-04-18 at 12.33.06 PM (1).jpeg",
    owners: ["Dixit Jain"],
    icons: ["Not specified"]
  },
  {
    name: "Nakoda Ke Lal",
    file: "WhatsApp Image 2026-04-18 at 12.33.06 PM.jpeg",
    owners: ["Pankaj Boradia", "Sanjay Jain"],
    icons: ["Pending"]
  },
  {
    name: "Newzel Titans",
    file: "WhatsApp Image 2026-04-18 at 12.35.50 PM.jpeg",
    owners: ["Jay Jain"],
    icons: ["Jignesh Jain", "Suresh Bothra"]
  },
  {
    name: "Dr. Munot Giants",
    file: "IMG_3970.PNG",
    owners: ["Vikram Munot"],
    icons: ["Ankit Sanghvi", "Vimal Munot"]
  }
];

export const sponsors: Sponsor[] = [
  {
    tier: "Title Sponsor",
    name: "Mascot",
    file: "MASCOT_titlesponsor.png",
    note: "Main presenting partner"
  },
  {
    tier: "Auction Sponsor",
    name: "Alnova",
    file: "alnova_auction_sponsor.png",
    note: "Official auction partner"
  },
  {
    tier: "Jersey Sponsor",
    name: "Champak Steel",
    file: "champaksteel_jerseysponsor.png",
    note: "Official jersey partner"
  },
  {
    tier: "Equipment Sponsor",
    name: "Bat Ball Stump",
    file: "paras_agency-bat-ball-stump-sponsor.png",
    note: "Match equipment partner"
  },
  {
    tier: "Cap Sponsor",
    name: "SRBS International Logistics",
    file: "srbs international logistics cap sponsor.png",
    note: "Cap sponsor partner"
  },
  {
    tier: "YouTube Sponsor",
    name: "Kureasia",
    file: "Kureasia Logo _page-0001youtube sponsor.jpg",
    note: "Digital media sponsor"
  },
  {
    tier: "Man of the Match",
    name: "Man of the Match Sponsor",
    file: "Man of the match sponsor.jpeg",
    note: "Match award sponsor"
  },
  {
    tier: "Toss Ka Boss",
    name: "Ikon Pharmachem",
    file: "toss_ka_boss_ss.png",
    note: "Official Toss Ka Boss sponsor"
  },
  {
    tier: "Water Sponsor",
    name: "UDE",
    file: "ude_water_ss.png",
    note: "Water and drinks partner"
  }
];

export function teamLogoPath(file: string): string {
  return `/assets/teams/${encodeURIComponent(file)}`;
}

export function sponsorLogoPath(file: string): string {
  return `/assets/sponsors/${encodeURIComponent(file)}`;
}

export const brandLogoPath = "/assets/brand/jctt-main-logo.png";
export const brandLogoFallbackPath = "/assets/sponsors/jctt_logo.webp";
