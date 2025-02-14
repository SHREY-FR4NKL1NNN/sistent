import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../../constants/constants';
import { IconProps } from '../types';

const DocumentIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  style,
  fill,
  secondaryFill,
  ...props
}: IconProps & { secondaryFill?: string }): JSX.Element => (
  <svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 28 29"
    width={width}
    fill={fill}
    {...props}
  >
    <g clipPath="url(#clip0_12752_37613)">
      <path
        d="M27.5889 23.8943L25.313 21.6184C25.0617 21.3673 24.7389 21.2319 24.4104 21.2111L23.6373 20.4381C24.7858 18.6122 24.566 16.1658 22.9777 14.5776C21.1341 12.7339 18.1345 12.7339 16.2907 14.5776C14.4473 16.4212 14.4473 19.4209 16.2909 21.2645C17.8792 22.8529 20.3256 23.0725 22.1512 21.9241L22.9244 22.6971C22.9449 23.0257 23.0806 23.3486 23.3318 23.5997L25.6077 25.8757C26.1548 26.4228 27.0418 26.4227 27.5891 25.8757C28.1359 25.3286 28.1361 24.4415 27.5889 23.8943ZM21.9873 20.274C20.6899 21.5713 18.579 21.5713 17.2815 20.274C15.9843 18.9767 15.9843 16.8658 17.2815 15.5684C18.5787 14.271 20.6895 14.271 21.9873 15.5684C23.2845 16.8657 23.2845 18.9767 21.9873 20.274Z"
        fill={secondaryFill}
      />

      <path
        d="M15.5006 13.8603C16.584 12.777 18.0261 12.1804 19.5615 12.1804C21.0969 12.1804 22.5391 12.7769 23.6224 13.8603C24.5473 14.785 25.1323 16.0107 25.2701 17.3119C25.376 18.3127 25.2171 19.328 24.8106 20.2492L24.8244 20.263C25.2533 20.368 25.645 20.5885 25.9575 20.9008L26.1822 21.1256V5.4155C26.1822 5.16814 26.0597 4.93669 25.8549 4.7976C23.849 3.43482 21.5707 2.71436 19.2656 2.71436C17.1178 2.71436 14.9933 3.34017 13.0911 4.52819C11.1881 3.34017 9.06313 2.71436 6.91535 2.71436C4.61087 2.71436 2.33256 3.43476 0.327145 4.7976C0.122467 4.93676 0 5.16821 0 5.4155V22.9281C0 23.2049 0.152904 23.459 0.397575 23.5886C0.642247 23.7182 0.938105 23.7017 1.1672 23.5463C2.92376 22.3527 4.9117 21.7215 6.91561 21.7215C8.91966 21.7215 10.908 22.3527 12.6652 23.5464C12.791 23.6322 12.9378 23.6756 13.0846 23.6756C13.0854 23.6756 13.0863 23.6755 13.0872 23.6755C13.2378 23.6775 13.3883 23.634 13.517 23.5463C14.2684 23.0357 15.0624 22.6289 15.8818 22.3295C15.7506 22.2197 15.6231 22.1044 15.5008 21.982C13.2614 19.7429 13.2614 16.0994 15.5006 13.8603ZM15.2532 7.75042C16.6544 6.79242 18.5693 6.6494 19.5862 6.6494C20.603 6.6494 22.518 6.79248 23.9192 7.75042C24.2642 7.98625 24.3526 8.45694 24.1169 8.80183C23.8811 9.14671 23.4102 9.23521 23.0655 8.99944C22.2874 8.46748 21.0192 8.16233 19.5863 8.16233C18.1533 8.16233 16.885 8.46742 16.1071 8.99944C15.9766 9.08865 15.8279 9.13153 15.6809 9.13153C15.4394 9.13153 15.2022 9.01626 15.0555 8.80189C14.8198 8.45701 14.9084 7.98625 15.2532 7.75042ZM15.2532 11.0232C16.6544 10.0652 18.5693 9.92216 19.5862 9.92216C20.603 9.92216 22.518 10.0652 23.9192 11.0232C24.2642 11.259 24.3526 11.7297 24.1169 12.0746C23.8811 12.4195 23.4102 12.508 23.0655 12.2722C22.2874 11.7402 21.0192 11.4351 19.5863 11.4351C18.1533 11.4351 16.885 11.7402 16.1071 12.2722C15.9766 12.3614 15.8279 12.4043 15.6809 12.4043C15.4394 12.4043 15.2022 12.289 15.0555 12.0747C14.8198 11.7298 14.9084 11.259 15.2532 11.0232ZM11.1265 18.6202C10.8907 18.9651 10.4199 19.0536 10.075 18.8179C9.29694 18.2858 8.02874 17.9808 6.5958 17.9808C5.16285 17.9808 3.89459 18.2858 3.11659 18.8179C2.98607 18.907 2.83736 18.95 2.69034 18.95C2.44888 18.95 2.21167 18.8347 2.06505 18.6204C1.82928 18.2754 1.91777 17.8047 2.26272 17.569C3.66399 16.6109 5.57895 16.468 6.5958 16.468C7.61265 16.468 9.52761 16.6112 10.9289 17.569C11.2738 17.8045 11.3622 18.2753 11.1265 18.6202ZM11.1265 15.3474C10.8907 15.6924 10.4199 15.7808 10.075 15.5451C9.29694 15.0131 8.02874 14.708 6.5958 14.708C5.16285 14.708 3.89459 15.0131 3.11659 15.5451C2.98607 15.6342 2.83736 15.6772 2.69034 15.6772C2.44888 15.6772 2.21167 15.562 2.06505 15.3476C1.82928 15.0027 1.91777 14.532 2.26272 14.2962C3.66399 13.3382 5.57895 13.1952 6.5958 13.1952C7.61265 13.1952 9.52761 13.3383 10.9289 14.2962C11.2738 14.5318 11.3622 15.0025 11.1265 15.3474ZM11.1265 12.0747C10.8907 12.4195 10.4199 12.508 10.075 12.2723C9.29694 11.7403 8.02874 11.4352 6.5958 11.4352C5.16285 11.4352 3.89459 11.7402 3.11659 12.2723C2.98607 12.3615 2.83736 12.4044 2.69034 12.4044C2.44888 12.4044 2.21167 12.2891 2.06505 12.0747C1.82928 11.7298 1.91777 11.2591 2.26272 11.0233C3.66399 10.0653 5.57895 9.92229 6.5958 9.92229C7.61265 9.92229 9.52761 10.0654 10.9289 11.0233C11.2738 11.259 11.3622 11.7298 11.1265 12.0747ZM11.1265 8.80189C10.8907 9.14678 10.4199 9.23527 10.075 8.9995C9.29694 8.46755 8.02874 8.1624 6.5958 8.1624C5.16285 8.1624 3.89459 8.46748 3.11659 8.9995C2.98607 9.08872 2.83736 9.13159 2.69034 9.13159C2.44888 9.13159 2.21167 9.01632 2.06505 8.80196C1.82928 8.45707 1.91777 7.98632 2.26272 7.75055C3.66399 6.79255 5.57895 6.64953 6.5958 6.64953C7.61265 6.64953 9.52761 6.79261 10.9289 7.75055C11.2738 7.98625 11.3622 8.45701 11.1265 8.80189Z"
        fill={fill ?? '#00b39f'}
      />
    </g>
    <defs>
      <clipPath id="clip0_12752_37613">
        <rect width="28" height="28" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default DocumentIcon;
