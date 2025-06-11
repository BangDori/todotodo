import { RootLayout } from "./components/layout/RootLayout";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export function App() {
  return (
    <RootLayout>
      <div className="flex flex-col gap-4">
        <Input placeholder="Enter your name" />
        <Button>Click me!</Button>
        <div className="flex items-center gap-2">
          <Checkbox id="test" />
          <Label htmlFor="test">Check Me!</Label>
        </div>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>Dialog Description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </RootLayout>
  );
}
