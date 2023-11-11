import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log("command ", command);
  console.log("mode ", mode);
  console.log("ssrBuild ", ssrBuild);
  const base = command === "serve" ? "/" : "/portfolio/";

  return {
    base,
    plugins: [react()],
  };
});
