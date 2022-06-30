import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const nav = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <DashboardIcon/>
    },
    {
      name: "Users",
      link: "/admin/users",
      icon: <GroupIcon/>
    },
    {
      name: "Stats",
      link: "/admin/stats",
      icon: <AutoGraphIcon/>
    },
  ];

export default nav;