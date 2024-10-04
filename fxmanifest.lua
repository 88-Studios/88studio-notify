fx_version 'cerulean'
game {'gta5'}
lua54 'yes'

author '88 Studio'
name '88 Studio - Notify'
description 'Add innovation to your server with the courier profession with a tiered system! | 88studio.tebex.io'

developer 'vezironi'
developer_discord 'https://discord.gg/hdstore'

discord 'https://discord.gg/88studio'
website 'https://88studio.tebex.io/'
tutorial 'https://88studio.gitbook.io/documentation/'

scriptname '88studio-notify'
version '1.0.0'

client_scripts {
    'client/main.lua',
}

files {
    'ui/index.html',
    'ui/index.js',
    'ui/index.css',
    'ui/assets/**/*.png',
    'ui/assets/**/*.js',
    'ui/assets/**/*.ttf',
}

ui_page 'ui/index.html'