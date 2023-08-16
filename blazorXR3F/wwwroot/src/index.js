import React, { useRef } from 'https://esm.sh/react'
import ReactDOM from 'https://esm.sh/react-dom'
import { Canvas, useFrame } from 'https://esm.sh/@react-three/fiber'
import htm from 'https://esm.sh/htm'

const html = htm.bind(React.createElement)

function Thing() {
    const ref = useRef()
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
    return html` <mesh
            ref=${ref}
            >
            <boxGeometry args=${[1, 1, 1]} />
            <meshNormalMaterial attach=${"material"} />
            </mesh>`
}

export function RenderReact() {
    ReactDOM.render(
        html` <${Canvas}>
                  <${Thing} />
              </${Canvas}>`,
        document.getElementById('blazorReact'),
    )
}
