import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { projectDetails } from '../app/data/project.ts';
import { projectStories } from '../app/data/project-stories.ts';

const layouts = new Set();
for (const project of projectDetails.projects) {
  const sections = projectStories[project.slug];
  assert.ok(sections?.length, `${project.slug}: missing story`);
  const ids = sections.map(section => section.id);
  assert.equal(new Set(['overview', ...ids]).size, ids.length + 1);
  const files = [project.cover];
  for (const section of sections) {
    assert.ok(section.title && section.blocks.length);
    for (const block of section.blocks) {
      if (block.type === 'text') assert.ok(block.text.trim());
      else {
        const images = block.type === 'image' ? [block] : block.images;
        for (const image of images) {
          assert.ok(image.alt.trim());
          assert.ok(existsSync(new URL(`../public/images/${project.slug}/${image.file}`, import.meta.url)), image.file);
          files.push(image.file);
        }
      }
    }
  }
  assert.deepEqual(new Set(files), new Set(project.gallery), `${project.slug}: preserve all gallery images`);
  layouts.add(JSON.stringify(sections.map(section => section.blocks.map(block => block.type))));
}
assert.equal(layouts.size, projectDetails.projects.length, 'Each project has its own content arrangement');
console.log(`Validated ${layouts.size} unique stories, section links, and all image files.`);
