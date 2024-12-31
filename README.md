# Experimenting for filling in chrome text areas using neovim

The concept works, but that's about it. I think this could be really useful with a bit of love.

## Add directory to chrome extensions

## Start server
websocat -t ws-l:127.0.0.1:8080 broadcast:mirror: --exit-on-eof

## Write something in vim
Click on a text area in chrome, go to vim, execute code below.

## Send document to socket server from vim
`:%!websocat ws://localhost:8080`
