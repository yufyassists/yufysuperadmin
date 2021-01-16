export default function() {
  return [
    {
      title: "Home",
      to: "/home",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Know Your User & Helper",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/knowyourhelper",
    },
    {
      title: "Configuration",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/configuration",
    },
    {
      title: "Add Or Remove Admin",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/addorremove",
    },
    {
      title: "Instant Notification",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/instantNotification",
    },
    {
      title: "Pending Helper Referrals",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/Pendinghelperreferrals",
    }
  ];
}
