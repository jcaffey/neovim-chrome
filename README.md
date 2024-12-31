# Experimenting for filling in chrome text areas using neovim

The concept works, but that's about it. I think this could be really useful with a bit of love.

## Server
websocat -t ws-l:127.0.0.1:8080 broadcast:mirror: --exit-on-eof

## Send to server from vim
`:%!websocat ws://localhost:8080`

## Usage
Select a text area, go to vim, execute code above.

