# wasm-gravsim-rs

Rust compiled to WebAssembly (`wasm-pack`) with a small Webpack dev server in `www/`.

## Prereqs

- Rust toolchain (`rustup`, `cargo`)
- `wasm-pack`
- `nvm` (Node is managed via nvm)

## Run (Dev)

```bash
# Use whatever Node version is in .nvmrc (currently: latest LTS)
nvm use || nvm install

# Build the WASM package into ./pkg (generated output)
wasm-pack build

# Start the webpack dev server
cd www
npm ci
npm start
```

Open `http://localhost:8080`.

### Iterating On Rust Code

If you change Rust code (in `src/`), re-run:

```bash
wasm-pack build
```

Then refresh the browser.

## Build (Prod Bundle)

```bash
nvm use || nvm install
wasm-pack build
cd www
npm ci
npm run build
```

## Notes About nvm In IDE Tasks

Some IDEs run build tasks in a non-interactive shell and won’t load `nvm` from `~/.bashrc`.
If you see `nvm: command not found`, run your commands in an interactive terminal, or prefix tasks with:

```bash
source ~/.nvm/nvm.sh
```
