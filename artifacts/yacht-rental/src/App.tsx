import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Fleet from "@/pages/Fleet";
import VesselDetail from "@/pages/VesselDetail";
import Routes from "@/pages/Routes";
import About from "@/pages/About";
import Contacts from "@/pages/Contacts";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/fleet" component={Fleet} />
        <Route path="/vessel/:slug" component={VesselDetail} />
        <Route path="/routes" component={Routes} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
