import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Wallet = lazy(() => import("../views/ui/wallet/WalletMain"));
const WalletCreate = lazy(() => import("../views/ui/wallet/WalletCreate"));
const WalletImport = lazy(() => import("../views/ui/wallet/WalletImport"));
const WalletBalanceTransfer = lazy(() => import("../views/ui/wallet/WalletBalanceTransfer"));
const Explorer = lazy(() => import("../views/ui/explorer/ExplorerMain"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/wallet" /> },
      { path: "/wallet", exact: true, element: <Wallet /> },
      { path: "/walletcreate", exact: true, element: <WalletCreate /> },
      { path: "/walletimport", exact: true, element: <WalletImport /> },
      { path: "/walletbalancetransfer", exact: true, element: <WalletBalanceTransfer /> },
      { path: "/explorer", exact: true, element: <Explorer /> },
    ],
  },
];

export default ThemeRoutes;
