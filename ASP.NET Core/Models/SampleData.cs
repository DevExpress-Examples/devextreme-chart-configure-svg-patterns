using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models {
    static class SampleData {
        public static List<Item> Items = new List<Item>() {
            new Item {
                Day = "Monday",
                Count = 3
            },
            new Item
            {
                Day = "Tuesday",
                Count = 2
            },
            new Item
            {
                Day = "Wednesday",
                Count = 3
            },
            new Item
            {
                Day = "Thursday",
                Count = 4
            },
            new Item
            {
                Day = "Friday",
                Count = 6
            },
            new Item
            {
                Day = "Saturday",
                Count = 11
            },
        };
    }
}
