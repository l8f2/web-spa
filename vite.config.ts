import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import unoCSS from 'unocss/vite'
import {presetAttributify, presetIcons, presetUno} from "unocss";
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

const plugins: (PluginOption | PluginOption[])[] = [
  unoCSS({
    shortcuts: [
      { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
    inspector: true,
  }),
  svgr(),
  react()
]

// https://vitejs.dev/config/
export default defineConfig({ plugins })
