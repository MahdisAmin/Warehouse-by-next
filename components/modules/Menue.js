import Link from 'next/link'
import React from 'react'

function Menue() {
  return (
      <div>
          <div>
              <p>تماس با ما</p>
              <p> درباره ما</p>
          </div>
          <ul>
              <Link>ورود / ثبت نام</Link>
          </ul>
    </div>
  )
}

export default Menue