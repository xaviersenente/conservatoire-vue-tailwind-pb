import { onMounted } from 'vue'

export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'Europe/Paris'
  }

  const formatter = new Intl.DateTimeFormat('fr-FR', options)
  const formattedDate = formatter.format(date)

  return formattedDate
}

export function animateLines(selector: string = '.curveLines path') {
  onMounted(() => {
    const lines = document.querySelectorAll<SVGPathElement>(selector)
    if (!window?.matchMedia('(prefers-reduced-motion: reduce)').matches)
      lines.forEach(function (el, key) {
        el.style.strokeDasharray = el.getTotalLength().toString()
        el.animate(
          [
            { strokeDashoffset: el.getTotalLength(), opacity: 0 }, //début
            { strokeDashoffset: 0, opacity: 1 } //fin
          ],
          {
            duration: 1000,
            delay: key * 200,
            fill: 'backwards'
          }
        )
      })
  })
}
