import './Icon.scss'

/**
 * Usage:
 * <Icon icon='icon-bell' />
 */

const Icon = function ({ icon, ...attrs }) {
  return (
    <svg className={attrs?.className ? `icon ${attrs.className}` : 'icon'}>
      <use href={`#${icon}`}></use>
    </svg>
  )
}

export default Icon
