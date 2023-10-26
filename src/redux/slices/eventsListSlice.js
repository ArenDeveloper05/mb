import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventsList: [
    {
      id: 1,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 2,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 3,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 4,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 5,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 6,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 7,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 8,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 9,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 10,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 11,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 12,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
    {
      id: 13,
      date_day: "04",
      date_month: "ОКТЯБРЬ",
      title: "«ЖАР-ПТИЦА. ОСЕНЬ-2023»",
      link: "#",
      desc: {
        desc_date: "4 (среда) 10:00 - 8 (воскресенье) 18:00",
        desc_links: {
          desc_links_link1: {
            desc_links_link1_title: "КАЛЕНДАРЬ",
            desc_links_link1_url: "#",
          },
          desc_links_link2: {
            desc_links_link2_title: "GOOGLECAL",
            desc_links_link2_url: "#",
          },
        },
      },
    },
  ],
};

const eventsListSlice = createSlice({
  name: "eventsList",
  initialState,
  reducer: {},
});

export const {} = eventsListSlice.actions;
export default eventsListSlice.reducer;
