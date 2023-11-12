import Rive from "@rive-app/react-canvas";
import { Button } from "../components/Button";

/**
 * resume
 * aboutme
 * experience
 * contact*
 */

export function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <div>
        <h1 className="text-center">Garayco</h1>
        <div className="flex flex-col mt-2">
          <Button>Start</Button>
          <Button>Exit</Button>
        </div>
      </div>
    </div>
  );
}
