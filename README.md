# Advanced Multi-Screen Mobile Application

A Pikachu-themed social app interface built with Expo and React Native. Explore a profile, home feed, Reels-style video screen, and sample inbox.

## Get started

**Requirements:** Node.js and npm.

```bash
npm install
npx expo start
```

Use the Expo CLI prompts to launch in Expo Go, an Android emulator, an iOS simulator, or a web browser. This project uses Expo SDK 57.

### Project checks

```bash
npm run lint
npx tsc --noEmit
```

## App screens

| Screen       | What it shows                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------- |
| **Profile**  | Group profile, sample stats, story bubbles, member control, theme switch, and a 12-photo grid. |
| **Home**     | Feed header, story row, and a video post.                                                      |
| **Reels**    | Full-screen looping video with creator details and decorative action icons.                    |
| **Messages** | Static inbox mock-up with sample conversations and avatars.                                    |
| **Search**   | Placeholder screen; search is not implemented.                                                 |

Counts, conversations, and social actions are mock UI only. There is no account system, backend, or persistent user data. The theme switch resets when the app restarts.

## Project layout

```text
src/
  app/                 Expo Router screens and layouts
  components/          Reusable screen and UI components
  theme-context.tsx    Shared light/dark theme state
assets/
  images/              Photos and UI images
  video/               Feed/Reels video
  expo.icon/           App icon artwork and metadata
instagramPhotos/       Reference screenshots (not used by the app)
```

<details>
<summary><strong>File-by-file guide</strong></summary>

### Project files

| File                      | Purpose                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| `.gitignore`              | Excludes dependencies, generated output, local environment files, and native build folders from Git. |
| `AGENTS.md`               | Project-specific development guidance.                                                               |
| `LICENSE`                 | MIT license notice included with the Expo starter; it does not license every app asset.              |
| `README.md`               | Setup instructions, project guide, and asset-attribution notes.                                      |
| `app.json`                | Expo app identity, platform settings, icons, plugins, and experiments.                               |
| `eslint.config.js`        | ESLint configuration based on Expo's flat config.                                                    |
| `package.json`            | npm scripts and direct dependencies.                                                                 |
| `package-lock.json`       | Locks the npm dependency tree for repeatable installs.                                               |
| `tsconfig.json`           | Strict TypeScript settings and `@/` import aliases.                                                  |
| `.vscode/extensions.json` | Recommends the Expo tools extension in VS Code.                                                      |
| `.vscode/settings.json`   | Configures selected VS Code save-time code actions.                                                  |

### Screens and navigation

Files in `src/app/` are routes. `_layout.tsx` files configure navigation.

| File                          | Purpose                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| `src/app/_layout.tsx`         | Sets up theme and safe-area providers, status bar, and the root navigation stack.              |
| `src/app/(tabs)/_layout.tsx`  | Configures the five tabs, icons, accessibility labels, and inset-aware tab bar.                |
| `src/app/(tabs)/home.tsx`     | Composes the Home feed from its header, story row, and video post.                             |
| `src/app/(tabs)/index.tsx`    | Default Profile tab; arranges profile details, stats, controls, and photo grid.                |
| `src/app/(tabs)/messages.tsx` | Displays mock conversations and note avatars; the search and message controls are visual only. |
| `src/app/(tabs)/reels.tsx`    | Composes the full-screen video, Reels header, creator details, and action rail.                |
| `src/app/(tabs)/search.tsx`   | Displays the Search placeholder; it has no search behavior yet.                                |

### Reusable components

| File                                   | Purpose                                                                       |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| `src/components/group-bio.tsx`         | Profile title and short bio.                                                  |
| `src/components/group-profile-bar.tsx` | Profile heading and decorative back/add controls.                             |
| `src/components/group-stats.tsx`       | Sample profile statistics and the Home story row.                             |
| `src/components/header.tsx`            | Profile header configuration and Home/alternate Reels headers.                |
| `src/components/member-button.tsx`     | Member button with a sample alert; it does not change membership.             |
| `src/components/photo-grid.tsx`        | Twelve-image grid and looping, muted Reels background video.                  |
| `src/components/reel-actions.tsx`      | Decorative Reels action icons and account image.                              |
| `src/components/reel-details.tsx`      | Reels creator, Follow presentation, caption, and audio label.                 |
| `src/components/reel-header.tsx`       | Reels/Friends labels and sample friend avatars.                               |
| `src/components/reels.tsx`             | Home feed video post and creator/audio heading.                               |
| `src/components/tab-placeholder.tsx`   | Shared icon-and-title layout for unfinished tabs.                             |
| `src/components/theme-toggle.tsx`      | Switches the shared light/dark theme.                                         |
| `src/theme-context.tsx`                | Defines theme colors and provides the theme context and `useAppTheme()` hook. |

</details>

## Assets and attribution

The project that the Pikachu photos and videos were downloaded from [Pexels](https://www.pexels.com/search/pikachu/) and [Unsplash](https://unsplash.com/s/photos/pikachu) under their free-use licenses.

The exact source platform, original photo page, and photographer are not recorded for each individual file, so this README cannot match a specific image to a specific contributor. Refer to the Pexels and Unsplash license terms for permitted use. The repository's `LICENSE` applies to the project code and does not grant rights to third-party images, video, screenshots, or character artwork.

<details>
<summary><strong>Local asset inventory</strong></summary>

### Pikachu photos

The project owner confirms these photos were obtained from Pexels and Unsplash under their free-use licenses. Which platform supplied each file, its original photo URL, and photographer name are not recorded.

| Files                                  | Use                                                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `assets/images/grid1.jpg`–`grid6.jpg`  | Profile grid; selected images are also used for story bubbles, friend avatars, and sample messages. |
| `assets/images/grid7.jpg`–`grid12.jpg` | Profile grid.                                                                                       |
| `assets/images/photo1.jpg`             | Profile image, story/avatar, feed and Reels creator image, and audio-cover image.                   |

### UI images

Creator/source and license are not recorded for these local UI assets.

| Files                                                                                                                                          | Use                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `assets/images/lessthan.png`, `assets/images/plus.png`                                                                                         | Back and add controls in the profile header.                     |
| `assets/images/heart.png`, `home.png`, `music-note.png`, `play.png`, `plusCircle.png`, `plusNoBox.png`, `search.png`, `send.png`, `verify.png` | Present in the repository; not referenced by current app source. |
| `assets/images/tabIcons/explore.png`, `explore@2x.png`, `explore@3x.png`                                                                       | Explore icon variants; not referenced by current app source.     |
| `assets/images/tabIcons/home.png`, `home@2x.png`, `home@3x.png`                                                                                | Home icon variants; not referenced by current app source.        |

Current navigation and action icons are rendered from `@expo/vector-icons` (Ionicons and MaterialCommunityIcons), not these PNG files.

### Video and app icon

| File                                        | Use and credit status                                                                               |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `assets/video/16752507_2160_3840_60fps.mp4` | Video loop in the Home feed and Reels screen. Creator, source page, and license are not recorded.   |
| `assets/expo.icon/Assets/grid.png`          | App icon, Android adaptive icon, web favicon, and splash artwork. Creator/license are not recorded. |
| `assets/expo.icon/Assets/expo-symbol 2.svg` | SVG layer referenced by the icon metadata. Exact origin/license is not recorded.                    |
| `assets/expo.icon/icon.json`                | Describes how the SVG and PNG layers are composed; this is configuration, not an image.             |

### Reference screenshots

These screenshots are not loaded by the app. Third-party content visible in them may have separate rights.

- `instagramPhotos/Screenshot 2026-09-17 080428.png`
- `instagramPhotos/Screenshot_20260922-105126.png`
- `instagramPhotos/Screenshot_20260922-105136.png`
- `instagramPhotos/Screenshot_20260922-105158.png`

</details>

## Development notes

- Keep screens in `src/app/` and reusable components in `src/components/`.
- Social controls and message data are examples, not connected features.
- When adding external media, save its source URL, creator, and license information with the project.
