import { createFileRoute } from '@tanstack/react-router';
import { defineConfig, Studio } from 'sanity';

const routePath = '/sanity';

export const Route = createFileRoute(routePath)({
  component: StudioRoute,
});

const config = defineConfig({
  projectId: '...',
  dataset: '...',
  basePath: routePath,
});

export default function StudioRoute() {
  return <Studio config={config} />;
}
