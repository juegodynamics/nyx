import {Box} from '@mui/material';
import React from 'react';

const SCALE = 0.3;

enum Structure {
  Auroracrista = 'Auroracrista',
  Photophone = 'Photophone',
  ChromatophoralChamber = 'Chromatophoral Chamber',
  TentolaMinora = 'Tentola Minora',
  PalatiformicPad = 'Palatiformic Pad',
  DentiformProjection = 'Dentiform Projection',
  LimbicRidges = 'Limbic Ridges',
  CrenulateWall = 'Crenulate Wall',
  TentolaMajora = 'Tentola Majora',
  Elastigon = 'Elastigon',
  VibratoryMembrane = 'Vibratory Membrane',
  TrifurcatedVocalFolds = 'Trifurcated Vocal Folds',
  LuminexGland = 'Luminex Gland',
  AetherVent = 'Aether Vent',
  ChromatophoralSac = 'Chromatophoral Sac',
  Other = 'Other',
}

// const highlightProps = (focus: Structure | null, match: Structure) => ({
//   opacity: focus === match ? 0.2 : 0,
//   style: {transition: 'opacity 300ms'},
// });

// const structureProps = (focus: Structure | null, match: Structure | null) => ({
//   style: {
//     filter: `brightness(${!focus?100:focus===match?120:80}%)`,
//     transition: 'opacity 300ms'
//   },
// });

export function YtterbianAnatomy() {
  const [focus, setFocus] = React.useState<Structure | null>(null);

  const focusProps = (
    structure: Structure | null,
    additionalFilter?: string
  ) => ({
    onMouseEnter: () => setFocus(structure || Structure.Other),
    onMouseLeave: () => setFocus(null),
    style: {
      filter: `brightness(${!focus ? 100 : focus === structure ? 120 : 80}%)${
        additionalFilter ? ` ${additionalFilter}` : ''
      }`,
      transition: 'filter 400ms',
    },
  });

  return (
    <Box>
      <svg
        width={`calc(2953*${SCALE})`}
        height={`calc(3284*${SCALE})`}
        viewBox="0 0 2953 3284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Ytterbian Anatomy">
          <path
            id="Inner Background"
            {...focusProps(null)}
            d="M420.5 1658L435.5 1947.5L543 2320H1290.5V2640L1518 3266.5H2028.5L2325 2954.5L2525.5 855C2347.33 654.833 1987.8 252.6 1975 245C1959 235.5 1924.5 232.5 1904 238.5C1887.6 243.3 1340.17 372.167 1068.5 436L588.5 988L420.5 1658Z"
            fill="#2C2127"
          />
          <path
            id="Vocal Cords"
            d="M1580.77 3112.77C1581.73 3108.97 1580.27 3116.11 1579.89 3117.75C1579.14 3121.04 1578.07 3124.24 1576.68 3127.31C1571.82 3138.11 1563.15 3146.99 1552.48 3152.13C1525.42 3165.16 1492.03 3151.06 1482.49 3122.58C1472.95 3094.1 1491.12 3062.73 1520.57 3056.84C1532.18 3054.51 1544.45 3056.39 1554.83 3062.07C1557.79 3063.69 1560.58 3065.6 1563.16 3067.77C1564.44 3068.86 1568.16 3072.27 1566.85 3071.22C1557.97 3064.08 1549.6 3058.26 1538.15 3056.44C1534.68 3055.89 1531.14 3055.76 1527.64 3055.97C1525.79 3056.08 1520.32 3056.96 1522.14 3056.63C1526.41 3055.84 1530.54 3055.78 1534.85 3055.89C1536.96 3055.94 1530.64 3055.75 1528.55 3055.94C1528.41 3055.95 1537.42 3055.52 1534.14 3055.65C1531.79 3055.74 1538.85 3055.53 1541.2 3055.42C1545.92 3055.21 1550.69 3055.31 1555.41 3055.31C1569.66 3055.32 1583.91 3055.65 1598.16 3055.67C1631.23 3055.71 1667.19 3055.6 1697.58 3041.05C1727.18 3026.87 1752.8 3005.51 1778.22 2985.07C1786.85 2978.13 1795.48 2971.19 1804.29 2964.48C1806.03 2963.15 1807.88 2961.96 1809.61 2960.63C1811.56 2959.13 1817.69 2955.05 1815.61 2956.35C1813.49 2957.67 1811.54 2959.24 1809.69 2960.91C1809.62 2960.97 1809.42 2961.15 1809.49 2961.09C1813.32 2957.88 1817.08 2954.99 1821.55 2952.69C1822.62 2952.15 1819.44 2953.83 1818.42 2954.46C1816.15 2955.84 1813.98 2957.4 1811.95 2959.12C1806 2964.17 1800.15 2971 1797.47 2978.37C1791.16 2995.72 1794.1 2989.06 1792.88 3004.29C1792.09 3014.11 1792.71 3000.69 1792.77 2998.9C1792.87 2995.29 1793.34 2991.71 1794.16 2988.2C1796.2 2979.42 1800.46 2971.2 1806.45 2964.46C1826.4 2942.03 1861.97 2940.35 1883.94 2960.8C1912.23 2987.13 1903.7 3035.42 1868.11 3050.47C1853.05 3056.83 1835.53 3055.99 1821.15 3048.2C1816.4 3045.63 1812.04 3042.34 1808.26 3038.48C1804.83 3034.99 1797.33 3025.36 1801.51 3030.07C1810.7 3040.41 1819.31 3049.07 1833.02 3052.91C1837.87 3054.27 1843 3054.81 1848.03 3054.7C1849.66 3054.67 1851.3 3054.55 1852.92 3054.36C1853.78 3054.26 1856.32 3053.84 1855.48 3053.99C1845.05 3055.8 1835.3 3055.81 1848.53 3054.65C1850.97 3054.44 1843.62 3054.87 1841.17 3054.85C1837.96 3054.81 1834.74 3054.98 1831.53 3054.96C1819.4 3054.87 1807.24 3054.61 1795.12 3054.07C1759.13 3052.46 1717.7 3050.05 1683.73 3063.85C1652.36 3076.6 1625.64 3098.48 1598.94 3118.77C1590.2 3125.41 1581.59 3132.2 1572.75 3138.71C1570.1 3140.66 1567.35 3142.46 1564.7 3144.41C1562.97 3145.68 1557.57 3149.16 1559.39 3148.04C1561.18 3146.93 1566.1 3142.97 1564.46 3144.28C1561.08 3146.97 1557.74 3149.4 1553.86 3151.35C1551.96 3152.3 1557.6 3149.3 1559.36 3148.09C1562.9 3145.64 1566.2 3142.75 1568.96 3139.45C1575.64 3131.48 1578.27 3122.67 1580.77 3112.77ZM1847 2946.22C1876.98 2946.22 1901.28 2970.52 1901.28 3000.5C1901.28 3030.48 1876.98 3054.78 1847 3054.78C1817.02 3054.78 1792.72 3030.48 1792.72 3000.5C1792.72 2970.52 1817.02 2946.22 1847 2946.22Z"
            fill="#7D4ECA"
            {...focusProps(Structure.TrifurcatedVocalFolds)}
          />
          <g
            id="Vent Shading"
            // filter="url(#filter0_f_10_1969)"
            {...focusProps(Structure.AetherVent, 'url(#filter0_f_10_1969)')}
          >
            <path
              d="M1939 246.5C1914 366 1845.5 587 1831 637.5C1816.5 688 1801.5 789.5 1809 910C1816.5 1030.5 1845.34 1140.56 1881.5 1237"
              stroke="#42323B"
              stroke-width="16"
            />
            <path
              d="M1939 246.5C1914 366 1845.5 587 1831 637.5C1816.5 688 1801.5 789.5 1809 910C1816.5 1030.5 1845.34 1140.56 1881.5 1237"
              stroke="#42323B"
              stroke-width="128"
              style={{opacity: 0}}
            />
          </g>
          <g
            id="Chamber Shading"
            // filter="url(#filter1_f_10_1969)"
            {...focusProps(
              Structure.ChromatophoralChamber,
              'url(#filter1_f_10_1969)'
            )}
          >
            <path
              d="M1292.1 606.238L1863.29 587L1825.67 795.808C1825.67 795.808 1819.2 912.53 1837 1003C1642.83 954.13 1229.8 985.08 1229.8 985.08C1191.37 930.556 1194.2 840.49 1212 779.504C1231.66 712.131 1271.33 637.067 1292.1 606.238Z"
              fill="#41313A"
            />
          </g>
          <path
            id="Vibratory Membrane"
            d="M1658.5 2098C1621.83 2097 1541 2104.1 1511 2140.5C1477.67 2032.33 1426.5 1841.8 1488.5 1945C1550.5 2048.2 1636.33 2055.67 1671.5 2046.5L1658.5 2098Z"
            fill="#DF7264"
            {...focusProps(Structure.VibratoryMembrane)}
          />
          <g id="Crenulation" {...focusProps(Structure.CrenulateWall)}>
            <path
              id="Vector 15"
              d="M696.301 1876.1C674.496 1876.93 691.345 1898.01 686.885 1930.66L674 1994.71C685.068 1997.19 706.707 2000.67 704.725 1994.71C702.247 1987.28 720.583 1902.55 725.043 1886.85C729.504 1871.15 718.105 1875.28 696.301 1876.1Z"
              fill="#78302F"
              stroke="#C2665F"
              stroke-width="2"
            />
            <path
              id="Vector 13"
              d="M705.5 1602.15C710 1580.75 708.5 1548.44 701 1502.92L752 1497C751 1508.23 748.4 1533.6 746 1545.25C743 1559.82 740.5 1598.96 746 1611.71C751.5 1624.45 722.5 1629.46 711 1627.64C699.5 1625.82 701 1623.54 705.5 1602.15Z"
              fill="#78302F"
              stroke="#C2665F"
              stroke-width="2"
            />
            <path
              id="Vector 21"
              d="M746.5 1614C733 1618 702.5 1617.5 702.5 1617.5L702 1622.5L704 1625.5L709 1627L721 1628L732 1626L741 1622.5L746 1617.5C746 1617.5 746.414 1615.38 746.5 1614Z"
              fill="#C2665F"
            />
            <path
              id="Vector 16"
              d="M708 1620.8C706.4 1734.8 694.833 1843.83 690 1884.5"
              stroke="#C2665F"
              stroke-linecap="round"
            />
            <path
              id="Vector 17"
              d="M716 1620C716 1679.6 702.167 1820.17 696.5 1883.5"
              stroke="#C2665F"
              stroke-linecap="round"
            />
            <path
              id="Vector 18"
              d="M723.9 1620C716.5 1764 707.667 1819.17 702.5 1883"
              stroke="#C2665F"
              stroke-linecap="round"
            />
            <path
              id="Vector 19"
              d="M731.5 1619C727 1710.5 713.667 1826.33 708.5 1882"
              stroke="#C2665F"
              stroke-linecap="round"
            />
            <path
              id="Vector 20"
              d="M739 1619C739.4 1672.6 721.667 1816.17 716.5 1881.5"
              stroke="#C2665F"
              stroke-linecap="round"
            />
            <path
              id="Vector 22"
              d="M724 1889C717.167 1888 699.8 1886.6 685 1889V1884L687 1879.5L690 1877L699 1876L712.5 1875H720L725 1877.5L726 1882L724 1889Z"
              fill="#C2665F"
            />
          </g>
          <g id="Tentola Minora" {...focusProps(Structure.TentolaMinora)}>
            <path
              id="Tentola Minora_1"
              d="M1446.5 1341C1451 1296 1416.5 1278 1357.5 1323L1302 1270.5L1344 1087L1503.5 1075L1742.5 1168.5C1776 1226 1820.1 1345.8 1728.5 1365C1614 1389 1427 1617.5 1324.5 1679C1223.03 1739.88 1057.38 1724.32 1007.49 1719.64L1006 1719.5C958 1715 931 1694 935.5 1679C940 1664 1025.5 1604 1128 1571C1230.5 1538 1236 1521.5 1285.5 1471.5C1335 1421.5 1442 1386 1446.5 1341Z"
              fill="#E55F4D"
            />
            <path
              id="Tentola Minora_2"
              d="M933.671 1678.19C935.59 1674.23 938.972 1686.58 940.926 1688.73C946.195 1694.52 954.143 1697.71 961.479 1699.91C986.899 1707.51 1014.81 1706.55 1041.09 1708.11C1133.83 1713.61 1238.54 1721.96 1323.55 1677.24C1330.77 1673.44 1323.79 1682.01 1316.6 1686.34C1308.36 1691.32 1299.81 1695.79 1291.09 1699.87C1265.07 1712.05 1237.34 1720.53 1209.28 1726.53C1142.98 1740.72 1052.58 1747.85 986.023 1728.85C970.856 1724.52 922.463 1701.32 933.671 1678.19Z"
              fill="#BC251A"
            />
          </g>
          <g
            id="Posterior Chromatophoral Sac"
            {...focusProps(Structure.ChromatophoralSac)}
          >
            <path
              id="Sac Body"
              d="M1841 776C1846.5 695.5 1879.5 590.5 1941.5 348L2047.5 728.5L1900 1224.5C1889.33 1180.83 1863.49 1081.45 1853.5 1031.5C1841 969 1835.5 856.5 1841 776Z"
              fill="#DFF073"
            />
            <path
              id="Sac Body_2"
              d="M2047.5 728.5L1900 1224.5C1895.11 1204.49 1887.04 1172.79 1878.76 1139.5C1870 1056.5 1948.13 831.5 1952 785.5C1965.51 625.101 1924.02 539.151 1913.65 455.5C1922.18 422.954 1931.46 387.281 1941.5 348L2047.5 728.5Z"
              fill="#B9C860"
            />
            <g id="Mask group">
              <mask
                id="mask0_10_1969"
                style={{maskType: 'alpha'}}
                maskUnits="userSpaceOnUse"
                x="1878"
                y="348"
                width="170"
                height="877"
              >
                <path
                  id="Sac Body_3"
                  d="M2047.5 728.5L1900 1224.5C1895.11 1204.49 1887.04 1172.79 1878.76 1139.5C1870 1056.5 1948.13 831.5 1952 785.5C1965.51 625.101 1924.02 539.151 1913.65 455.5C1922.18 422.954 1931.46 387.281 1941.5 348L2047.5 728.5Z"
                  fill="#B9C860"
                />
              </mask>
              <g mask="url(#mask0_10_1969)">
                <g id="Sac Ridges">
                  <g id="[Copy] Frame 1">
                    <path
                      id="[Linked] Vector 248"
                      d="M1859.71 372.193L1968.62 356.704"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_2">
                    <path
                      id="[Linked] Vector 248_2"
                      d="M1860.56 379.65L1969.39 363.62"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_3">
                    <path
                      id="[Linked] Vector 248_3"
                      d="M1861.59 388.065L1970.34 371.479"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_4">
                    <path
                      id="[Linked] Vector 248_4"
                      d="M1862.68 396.484L1971.35 379.387"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_5">
                    <path
                      id="[Linked] Vector 248_5"
                      d="M1863.69 403.936L1972.29 386.419"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_6">
                    <path
                      id="[Linked] Vector 248_6"
                      d="M1864.89 412.348L1973.42 394.404"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_7">
                    <path
                      id="[Linked] Vector 248_7"
                      d="M1866.13 420.751L1974.6 402.424"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_8">
                    <path
                      id="[Linked] Vector 248_8"
                      d="M1867.27 428.172L1975.68 409.536"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_9">
                    <path
                      id="[Linked] Vector 248_9"
                      d="M1868.59 436.547L1976.95 417.606"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_10">
                    <path
                      id="[Linked] Vector 248_10"
                      d="M1869.79 443.93L1978.1 424.749"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_11">
                    <path
                      id="[Linked] Vector 248_11"
                      d="M1871.18 452.26L1979.45 432.851"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_12">
                    <path
                      id="[Linked] Vector 248_12"
                      d="M1872.59 460.561L1980.83 440.964"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_13">
                    <path
                      id="[Linked] Vector 248_13"
                      d="M1873.86 467.863L1982.08 448.129"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_14">
                    <path
                      id="[Linked] Vector 248_14"
                      d="M1875.32 476.094L1983.51 456.247"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_15">
                    <path
                      id="[Linked] Vector 248_15"
                      d="M1876.62 483.324L1984.8 463.408"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_16">
                    <path
                      id="[Linked] Vector 248_16"
                      d="M1878.1 491.468L1986.28 471.513"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_17">
                    <path
                      id="[Linked] Vector 248_17"
                      d="M1879.6 499.56L1987.77 479.606"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_18">
                    <path
                      id="[Linked] Vector 248_18"
                      d="M1881.1 507.595L1989.28 487.682"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_19">
                    <path
                      id="[Linked] Vector 248_19"
                      d="M1882.42 514.631L1990.61 494.79"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_20">
                    <path
                      id="[Linked] Vector 248_20"
                      d="M1883.92 522.544L1992.13 502.822"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_21">
                    <path
                      id="[Linked] Vector 248_21"
                      d="M1885.41 530.384L1993.65 510.823"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_22">
                    <path
                      id="[Linked] Vector 248_22"
                      d="M1886.89 538.148L1995.17 518.791"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_23">
                    <path
                      id="[Linked] Vector 248_23"
                      d="M1888.36 545.83L1996.69 526.722"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_24">
                    <path
                      id="[Linked] Vector 248_24"
                      d="M1889.81 553.425L1998.19 534.612"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_25">
                    <path
                      id="[Linked] Vector 248_25"
                      d="M1891.25 560.93L1999.69 542.458"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_26">
                    <path
                      id="[Linked] Vector 248_26"
                      d="M1892.66 568.338L2001.17 550.258"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_27">
                    <path
                      id="[Linked] Vector 248_27"
                      d="M1894.21 576.497L2002.79 558.906"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_28">
                    <path
                      id="[Linked] Vector 248_28"
                      d="M1895.57 583.687L2004.23 566.597"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_29">
                    <path
                      id="[Linked] Vector 248_29"
                      d="M1897.04 591.587L2005.8 575.112"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_30">
                    <path
                      id="[Linked] Vector 248_30"
                      d="M1898.34 598.538L2007.19 582.686"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_31">
                    <path
                      id="[Linked] Vector 248_31"
                      d="M1899.74 606.157L2008.7 591.061"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_32">
                    <path
                      id="[Linked] Vector 248_32"
                      d="M1901.09 613.617L2010.16 599.358"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_33">
                    <path
                      id="[Linked] Vector 248_33"
                      d="M1902.4 620.914L2011.59 607.577"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_34">
                    <path
                      id="[Linked] Vector 248_34"
                      d="M1903.66 628.043L2012.97 615.72"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_35">
                    <path
                      id="[Linked] Vector 248_35"
                      d="M1904.98 635.694L2014.42 624.591"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_36">
                    <path
                      id="[Linked] Vector 248_36"
                      d="M1906.25 643.118L2015.81 633.36"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_37">
                    <path
                      id="[Linked] Vector 248_37"
                      d="M1907.35 649.668L2017.03 641.264"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_38">
                    <path
                      id="[Linked] Vector 248_38"
                      d="M1908.59 657.261L2018.39 650.618"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_39">
                    <path
                      id="[Linked] Vector 248_39"
                      d="M1909.68 663.971L2019.58 659.124"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_40">
                    <path
                      id="[Linked] Vector 248_40"
                      d="M1910.81 670.981L2020.77 668.283"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_41">
                    <path
                      id="[Linked] Vector 248_41"
                      d="M1911.87 677.679L2021.87 677.36"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_42">
                    <path
                      id="[Linked] Vector 248_42"
                      d="M1912.96 684.645L2022.94 687.162"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_43">
                    <path
                      id="[Linked] Vector 248_43"
                      d="M1913.74 691.388L2023.63 696.37"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_44">
                    <path
                      id="[Linked] Vector 248_44"
                      d="M1914.27 698.415L2024.03 705.64"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_45">
                    <path
                      id="[Linked] Vector 248_45"
                      d="M1914.55 705.164L2024.17 714.286"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_46">
                    <path
                      id="[Linked] Vector 248_46"
                      d="M1914.64 712.625L2024.09 723.634"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_47">
                    <path
                      id="[Linked] Vector 248_47"
                      d="M1914.53 719.729L2023.81 732.343"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_48">
                    <path
                      id="[Linked] Vector 248_48"
                      d="M1914.26 726.966L2023.36 741.067"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_49">
                    <path
                      id="[Linked] Vector 248_49"
                      d="M1913.87 733.787L2022.79 749.16"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_50">
                    <path
                      id="[Linked] Vector 248_50"
                      d="M1913.32 741.219L2022.05 757.889"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_51">
                    <path
                      id="[Linked] Vector 248_51"
                      d="M1912.63 748.72L2021.17 766.6"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_52">
                    <path
                      id="[Linked] Vector 248_52"
                      d="M1911.88 755.751L2020.24 774.673"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_53">
                    <path
                      id="[Linked] Vector 248_53"
                      d="M1910.96 763.337L2019.13 783.329"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_54">
                    <path
                      id="[Linked] Vector 248_54"
                      d="M1909.95 770.94L2017.92 791.938"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_55">
                    <path
                      id="[Linked] Vector 248_55"
                      d="M1908.91 778.041L2016.71 799.91"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_56">
                    <path
                      id="[Linked] Vector 248_56"
                      d="M1907.71 785.641L2015.33 808.411"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_57">
                    <path
                      id="[Linked] Vector 248_57"
                      d="M1906.44 793.217L2013.88 816.839"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_58">
                    <path
                      id="[Linked] Vector 248_58"
                      d="M1905.19 800.271L2012.45 824.638"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_59">
                    <path
                      id="[Linked] Vector 248_59"
                      d="M1903.79 807.769L2010.88 832.909"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_60">
                    <path
                      id="[Linked] Vector 248_60"
                      d="M1902.33 815.205L2009.25 841.084"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_61">
                    <path
                      id="[Linked] Vector 248_61"
                      d="M1900.83 822.569L2007.57 849.154"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_62">
                    <path
                      id="[Linked] Vector 248_62"
                      d="M1899.2 830.293L2005.75 857.61"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_63">
                    <path
                      id="[Linked] Vector 248_63"
                      d="M1897.62 837.468L2004 865.434"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_64">
                    <path
                      id="[Linked] Vector 248_64"
                      d="M1895.92 844.955L2002.12 873.599"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_65">
                    <path
                      id="[Linked] Vector 248_65"
                      d="M1894.2 852.299L2000.23 881.598"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_66">
                    <path
                      id="[Linked] Vector 248_66"
                      d="M1892.38 859.872L1998.22 889.856"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_67">
                    <path
                      id="[Linked] Vector 248_67"
                      d="M1890.57 867.243L1996.21 897.894"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_68">
                    <path
                      id="[Linked] Vector 248_68"
                      d="M1888.76 874.397L1994.21 905.703"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_69">
                    <path
                      id="[Linked] Vector 248_69"
                      d="M1886.81 881.974L1992.04 914.021"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_70">
                    <path
                      id="[Linked] Vector 248_70"
                      d="M1884.91 889.214L1989.91 922.004"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_71">
                    <path
                      id="[Linked] Vector 248_71"
                      d="M1883.01 896.37L1987.75 929.966"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_72">
                    <path
                      id="[Linked] Vector 248_72"
                      d="M1881.09 903.574L1985.52 938.118"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_73">
                    <path
                      id="[Linked] Vector 248_73"
                      d="M1879.14 911.085L1983.14 946.909"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_74">
                    <path
                      id="[Linked] Vector 248_74"
                      d="M1873.85 920.619L1979.46 951.376"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_75">
                    <path
                      id="[Linked] Vector 248_75"
                      d="M1870 929.485L1976.5 957.008"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_76">
                    <path
                      id="[Linked] Vector 248_76"
                      d="M1866.91 937.924L1973.99 963.138"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_77">
                    <path
                      id="[Linked] Vector 248_77"
                      d="M1864.12 946.665L1971.62 969.959"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_78">
                    <path
                      id="[Linked] Vector 248_78"
                      d="M1861.79 954.817L1969.6 976.654"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_79">
                    <path
                      id="[Linked] Vector 248_79"
                      d="M1859.6 963.179L1967.66 983.733"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_80">
                    <path
                      id="[Linked] Vector 248_80"
                      d="M1857.65 971.257L1965.91 990.732"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_81">
                    <path
                      id="[Linked] Vector 248_81"
                      d="M1855.8 979.483L1964.23 997.971"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_82">
                    <path
                      id="[Linked] Vector 248_82"
                      d="M1854.02 987.841L1962.61 1005.42"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_83">
                    <path
                      id="[Linked] Vector 248_83"
                      d="M1852.33 996.31L1961.05 1013.03"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_84">
                    <path
                      id="[Linked] Vector 248_84"
                      d="M1850.81 1004.33L1959.64 1020.29"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_85">
                    <path
                      id="[Linked] Vector 248_85"
                      d="M1849.35 1012.41L1958.29 1027.64"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_86">
                    <path
                      id="[Linked] Vector 248_86"
                      d="M1847.95 1020.51L1956.98 1035.03"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_87">
                    <path
                      id="[Linked] Vector 248_87"
                      d="M1846.6 1028.62L1955.73 1042.44"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_88">
                    <path
                      id="[Linked] Vector 248_88"
                      d="M1845.32 1036.71L1954.53 1049.84"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_89">
                    <path
                      id="[Linked] Vector 248_89"
                      d="M1844 1045.31L1953.3 1057.69"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_90">
                    <path
                      id="[Linked] Vector 248_90"
                      d="M1842.83 1053.31L1952.21 1064.98"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_91">
                    <path
                      id="[Linked] Vector 248_91"
                      d="M1841.63 1061.76L1951.09 1072.64"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_92">
                    <path
                      id="[Linked] Vector 248_92"
                      d="M1840.5 1070.09L1950.03 1080.14"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_93">
                    <path
                      id="[Linked] Vector 248_93"
                      d="M1839.42 1078.26L1949.03 1087.45"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_94">
                    <path
                      id="[Linked] Vector 248_94"
                      d="M1838.33 1086.78L1948.02 1094.95"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_95">
                    <path
                      id="[Linked] Vector 248_95"
                      d="M1837.29 1095.06L1947.06 1102.12"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_96">
                    <path
                      id="[Linked] Vector 248_96"
                      d="M1836.24 1103.58L1946.09 1109.29"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_97">
                    <path
                      id="[Linked] Vector 248_97"
                      d="M1835.17 1112.24L1945.1 1116.28"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_98">
                    <path
                      id="[Linked] Vector 248_98"
                      d="M1833.99 1121.45L1943.97 1123.2"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_99">
                    <path
                      id="[Linked] Vector 248_99"
                      d="M1832.61 1131.11L1942.6 1129.53"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                  <g id="[Copy] Frame 1_100">
                    <path
                      id="[Linked] Vector 248_100"
                      d="M1830.98 1140.44L1940.8 1134.11"
                      stroke="#747D3A"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g>
            </g>
            <path
              id="Sac Vacuoles"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1838.91 854.997C1838.77 836.847 1839 818.982 1839.64 802.024C1853.75 802.62 1865 814.246 1865 828.5C1865 842.998 1853.36 854.776 1838.91 854.997ZM1841.86 933.966C1840.7 916.716 1839.87 898.875 1839.38 881.023C1839.75 881.008 1840.12 881 1840.5 881C1855.14 881 1867 892.864 1867 907.5C1867 921.68 1855.86 933.259 1841.86 933.966ZM1851.33 1019.73C1848.68 1004.21 1846.4 986.372 1844.55 967.162C1845.52 967.055 1846.5 967 1847.5 967C1862.14 967 1874 978.864 1874 993.5C1874 1006.84 1864.15 1017.87 1851.33 1019.73ZM1847.7 723.332C1844.35 742.46 1842.12 759.67 1841.01 775.884C1841.83 775.961 1842.66 776 1843.5 776C1858.14 776 1870 764.136 1870 749.5C1870 736.295 1860.34 725.346 1847.7 723.332ZM1853.58 693.088C1855.79 693.683 1858.11 694 1860.5 694C1875.14 694 1887 682.136 1887 667.5C1887 654.551 1877.71 643.771 1865.44 641.459C1860.86 660.227 1856.91 677.312 1853.58 693.088ZM1871.26 617.998C1873.56 618.651 1875.99 619 1878.5 619C1893.14 619 1905 607.136 1905 592.5C1905 579.91 1896.22 569.371 1884.45 566.671C1879.66 585.043 1875.26 602.09 1871.26 617.998Z"
              fill="#EA9C55"
            />
          </g>
          <path
            id="Lower Left Bulk Bg"
            {...focusProps(null)}
            d="M1403.96 2270.36L1403.97 2270.36C1423.1 2275.47 1465.01 2281.6 1503.58 2280.58C1522.85 2280.07 1541.61 2277.76 1556.37 2272.46C1571.04 2267.2 1582.71 2258.59 1585.9 2244.91C1590.17 2226.56 1594.25 2199.13 1598.54 2170.38C1601.06 2153.46 1603.65 2136.09 1606.38 2119.85C1610.1 2097.77 1614.08 2077.77 1618.52 2063.42C1620.75 2056.22 1623.01 2050.72 1625.27 2047.13C1627.69 2043.29 1629.25 2042.96 1629.74 2042.99C1640.93 2043.72 1663.27 2047.29 1683.39 2053.09C1693.46 2056 1702.77 2059.4 1709.8 2063.19C1713.32 2065.09 1716.14 2067.01 1718.17 2068.92C1720.21 2070.84 1721.25 2072.55 1721.63 2073.99C1721.75 2074.48 1721.84 2075.88 1721.59 2078.56C1721.34 2081.09 1720.83 2084.35 1720.06 2088.3C1718.51 2096.2 1715.94 2106.55 1712.51 2118.68C1705.66 2142.91 1695.41 2173.98 1683.14 2206.07C1670.86 2238.16 1656.58 2271.19 1641.67 2299.36C1626.69 2327.66 1611.29 2350.61 1596.89 2362.96C1582.1 2375.67 1558.7 2391.98 1531.66 2410.45C1527.36 2413.38 1522.98 2416.37 1518.53 2419.4C1495.04 2435.4 1469.67 2452.68 1445.58 2470.27C1416.94 2491.18 1389.93 2512.65 1369.89 2533.07C1359.87 2543.29 1351.49 2553.34 1345.52 2563.02C1339.57 2572.67 1335.85 2582.21 1335.5 2591.35C1334.25 2624.15 1334.09 2645.18 1341.77 2672.76C1349.39 2700.13 1364.7 2733.84 1393.92 2792.29C1452.38 2909.2 1502.28 3021.01 1539.7 3135.24C1541.24 3139.96 1542.71 3144.44 1544.11 3148.72C1568.47 3223.07 1572.16 3234.32 1578.1 3263H1477.1C1474.61 3241.43 1468.59 3220.02 1458.25 3190.57C1452.2 3173.34 1444.61 3153.21 1435.33 3128.59C1427.92 3108.91 1419.42 3086.36 1409.75 3060.12C1392.35 3012.87 1376.3 2967.14 1361.55 2925.15C1353.2 2901.38 1345.28 2878.81 1337.77 2857.84C1317.06 2800.01 1299.43 2754.12 1284.95 2729.47C1270.84 2705.47 1261.9 2684.97 1256.46 2661.89C1251 2638.77 1249 2612.87 1249 2578C1249 2542.5 1241.78 2506.84 1232.94 2479.1C1228.51 2465.22 1223.65 2453.25 1219.03 2444.2C1216.72 2439.69 1214.44 2435.83 1212.26 2432.82C1210.14 2429.9 1207.87 2427.41 1205.5 2426.04C1203.42 2424.84 1199.34 2423.35 1194.03 2421.71C1188.57 2420.02 1181.4 2418.04 1172.87 2415.92C1155.79 2411.66 1133.12 2406.76 1107.37 2402.31C1055.92 2393.41 991.955 2386.23 935.767 2389.51C823.487 2396.05 735.354 2435.32 687.9 2464.6C665.489 2478.42 636.202 2481.2 608.661 2476.13C581.086 2471.05 556.027 2458.26 542.04 2441.9C534.87 2433.51 523.688 2416.81 509.764 2395.62C507.82 2392.67 505.825 2389.62 503.784 2386.51C491.29 2367.47 477.055 2345.77 462.035 2324.15C444.563 2299.01 425.965 2273.89 407.71 2253.07C389.539 2232.35 371.385 2215.52 354.755 2207.41C323.071 2191.94 315.452 2183.83 312.967 2180.05C312.431 2179.24 312.112 2178.6 311.763 2177.9C311.703 2177.78 311.643 2177.66 311.58 2177.54L311.578 2177.53C311.189 2176.76 310.538 2175.47 309.265 2174.43C307.965 2173.37 306.432 2172.88 304.855 2172.59C303.29 2172.3 301.277 2172.13 298.695 2172C294.564 2171.8 287.957 2172.3 280.287 2172.88C277.86 2173.06 275.327 2173.25 272.732 2173.43C261.683 2174.19 249.014 2174.8 236.95 2174.01C224.813 2173.21 213.725 2171.01 205.603 2166.46C197.723 2162.05 192.644 2155.46 191.992 2145.25C191.268 2133.91 192.423 2125.4 194.547 2118.54C196.672 2111.68 199.824 2106.28 203.358 2101.14C204.589 2099.35 205.89 2097.58 207.213 2095.77C213.375 2087.35 220.02 2078.27 222.442 2064.18L222.533 2063.65C225.293 2047.59 228.892 2026.67 234.619 2007.31C240.401 1987.76 248.12 1970.65 258.625 1961.52C270.055 1951.58 285.489 1939.24 299.591 1930.6C306.663 1926.26 313.202 1922.98 318.616 1921.34C324.263 1919.62 327.506 1920.04 329.14 1921.23C334.519 1925.16 337.266 1930.43 337.375 1938.43C337.489 1946.75 334.732 1957.9 328.778 1973.04C325.825 1980.54 322.528 1987.72 319.226 1994.89L318.991 1995.4C315.783 2002.36 312.572 2009.33 309.779 2016.41C304.038 2030.95 299.959 2046.19 301.007 2063.74C302.042 2081.08 306.734 2092.38 312.778 2099.42C318.826 2106.46 326.047 2109 331.5 2109C336.398 2109 345.441 2107.59 353.925 2101.12C362.527 2094.56 370.108 2083.15 372.47 2063.99C372.937 2060.2 373.417 2056.42 373.891 2052.68C375.231 2042.13 376.521 2031.96 377.333 2023.1C377.884 2017.09 378.226 2011.58 378.209 2006.86C378.194 2002.35 377.855 1998.25 376.899 1995.07C375.587 1987.45 372.911 1979.54 370.322 1971.89C369.944 1970.78 369.569 1969.67 369.2 1968.56C366.205 1959.62 363.575 1951.02 362.99 1942.72C361.634 1923.49 361.117 1904.75 363.141 1888C365.167 1871.23 369.699 1856.81 378.155 1845.96C390.933 1829.56 415.171 1812.69 437.718 1810.04C448.829 1808.73 459.295 1810.88 467.948 1817.98C476.664 1825.12 484.059 1837.7 488.074 1858.27C488.677 1861.35 489.304 1864.44 489.932 1867.53C491.914 1877.27 493.894 1887 495.069 1896.66C496.61 1909.32 496.696 1921.4 493.645 1932.43C486.164 1959.48 484.817 1984.26 486.025 2002.43C486.628 2011.51 487.875 2019.03 489.359 2024.43C490.095 2027.1 490.931 2029.4 491.856 2031.15C492.315 2032.01 492.874 2032.88 493.565 2033.62C494.208 2034.3 495.34 2035.25 496.971 2035.46C500.677 2035.96 507.353 2036.8 513.448 2035.82C516.522 2035.33 519.764 2034.33 522.46 2032.32C525.266 2030.23 527.273 2027.19 527.946 2023.16C528.174 2021.79 528.402 2020.28 528.647 2018.66C529.524 2012.86 530.604 2005.72 532.584 1999.08C533.838 1994.87 535.387 1991.12 537.313 1988.23C539.229 1985.35 541.354 1983.57 543.724 1982.81C550.444 1980.65 567.839 1976.56 587.597 1973.58C607.409 1970.59 629.051 1968.8 644.443 1970.96C659.904 1973.14 687.505 1981.97 713.192 1993.88C725.998 1999.82 738.184 2006.46 748.044 2013.32C758.009 2020.25 765.169 2027.11 768.46 2033.36C769.665 2035.65 770.971 2038.18 772.372 2040.88C779.601 2054.86 789.356 2073.71 800.705 2090.2C807.488 2100.06 814.961 2109.26 822.967 2116.16C830.944 2123.04 839.784 2127.92 849.258 2128.49C852.164 2128.67 860.229 2130.21 872.934 2133.05C885.465 2135.85 902.145 2139.82 921.989 2144.68C961.673 2154.42 1013.94 2167.74 1070.83 2182.47C1184.62 2211.94 1316.89 2247.03 1403.96 2270.36Z"
            fill="#79616E"
            stroke="#9B808E"
            stroke-width="8"
          />
          <path
            id="Upper Left Bulk Bg"
            {...focusProps(null)}
            d="M572.328 902.16L572.346 902.1L572.363 902.039C599.194 802.297 640.39 650.987 676.776 521.217C694.97 456.33 711.957 396.845 725.343 351.89C732.037 329.409 737.823 310.586 742.405 296.546C744.697 289.523 746.679 283.725 748.317 279.276C749.985 274.744 751.215 271.842 751.992 270.451C761.189 253.994 769.768 247 779.334 243.793C788.045 240.872 797.861 240.919 810.894 240.981C812.854 240.99 814.887 241 817 241C828.008 241 933.312 245.017 1068.8 250.185C1125.93 252.365 1188.42 254.748 1251.47 257.122C1463.88 265.119 1682.67 273.001 1723.05 272.5C1786.23 271.715 1873.5 247.758 1912.44 234.904C1912.79 235.972 1913.09 237.263 1913.31 238.806C1913.74 241.915 1913.82 245.769 1913.54 250.325C1912.97 259.439 1910.98 270.92 1907.93 283.998C1901.84 310.13 1891.65 342.094 1880.73 373.174C1869.81 404.23 1858.21 434.301 1849.33 456.615C1844.89 467.77 1841.14 476.981 1838.49 483.402C1837.17 486.613 1836.12 489.125 1835.41 490.834C1835.37 490.94 1835.32 491.044 1835.28 491.144L1267.78 522.506L1267.02 522.548L1266.33 522.867C1249.5 530.618 1222.65 552.706 1195.1 593.564C1167.48 634.524 1139.01 694.563 1119.11 778.578C1079.29 946.678 1135.34 1025.5 1170.64 1044.04L1171.63 1044.56L1172.74 1044.49C1255.57 1039.49 1450.55 1030.91 1568.31 1036.5C1715.66 1043.49 1775.76 1071.96 1799.62 1096.77C1802.21 1099.47 1804.68 1103.76 1806.93 1109.64C1809.16 1115.48 1811.08 1122.63 1812.72 1130.84C1815.99 1147.27 1818.07 1167.57 1819.38 1189.24C1821.65 1226.89 1821.58 1268.32 1821.52 1300.22C1821.51 1305.05 1821.5 1309.66 1821.5 1314C1821.5 1346.43 1813.75 1379.17 1801.25 1403.68C1788.6 1428.5 1771.86 1443.5 1754.5 1443.5C1745.36 1443.5 1738.42 1441.15 1733.03 1436.51C1727.57 1431.81 1723.29 1424.39 1720.23 1413.48C1714.05 1391.51 1713.24 1357.02 1715.99 1307.22C1718.86 1255.44 1686.77 1214.29 1641.18 1183.5C1595.54 1152.67 1535.63 1131.65 1480.83 1120.09C1424.65 1108.23 1377.7 1131.86 1349.45 1166.8C1321.38 1201.53 1311.21 1248.27 1329.98 1282.91C1338.59 1298.78 1342.28 1313.6 1341.67 1327.37C1341.06 1341.12 1336.15 1354.12 1327.1 1366.37C1308.87 1391.03 1273.91 1412.57 1224.16 1430.23C1173.89 1448.08 1155.79 1460.99 1142.89 1475.4C1139.47 1479.22 1136.51 1483.02 1133.44 1486.95C1125.05 1497.69 1115.89 1509.42 1094.61 1525.29C1065.91 1546.69 1021.34 1560.81 971.427 1565.64C921.588 1570.47 866.883 1566.01 818.201 1550.68C740.001 1526.07 725.389 1488.63 726.486 1475.33L727.573 1462.15L719.364 1472.52L632.277 1582.5L531.906 1647.05L521.485 1528.15L520.92 1521.71L515.41 1525.09L484.41 1544.09L482.38 1545.33L482.506 1547.71C483.824 1572.66 483.382 1624.86 475.084 1664.68C472.356 1677.78 475.668 1691.03 479.312 1702.52C480.126 1705.09 480.933 1707.5 481.71 1709.82C482.742 1712.91 483.72 1715.83 484.588 1718.74C486.081 1723.75 487 1727.98 487 1731.5C487 1750.29 478.017 1764.65 464.525 1774.45C450.936 1784.32 432.792 1789.5 415 1789.5C397.113 1789.5 384.136 1785.4 374.511 1777.31C364.833 1769.18 358.014 1756.58 353.374 1738.51C352.689 1735.84 353.076 1732.21 354.456 1727.19C355.386 1723.81 356.64 1720.2 358.03 1716.21C358.696 1714.29 359.394 1712.28 360.103 1710.16C364.372 1697.42 368.631 1681.83 365.431 1664.76C358.06 1625.45 357.521 1573.89 358.988 1554.81C359.134 1552.91 359.297 1550.92 359.465 1548.87C360.009 1542.24 360.609 1534.92 360.88 1527.68C361.235 1518.21 361.047 1508.55 359.356 1500.32C357.684 1492.19 354.373 1484.63 347.765 1480.51C341.017 1476.3 332.093 1476.43 321.037 1480.78C309.644 1485.25 302.252 1492.36 297.681 1501.5C293.188 1510.48 291.543 1521.16 291.066 1532.65C290.678 1541.97 291.057 1552.16 291.449 1562.71C291.539 1565.15 291.631 1567.6 291.713 1570.06C292.157 1583.32 292.367 1597.14 291.018 1611.12C287.216 1650.52 305.565 1685.6 327.147 1704.12C323.837 1703.9 318.98 1703.69 311.601 1703.5C302.499 1703.27 295.664 1701.07 290.378 1697.56C285.08 1694.04 281.061 1689.01 277.902 1682.68C271.477 1669.82 268.946 1652.38 266.221 1633.26L262.261 1633.83L266.221 1633.26L265.96 1631.44L262 1632L265.96 1631.43C263.136 1611.67 257.6 1597.63 251.714 1585.67C249.666 1581.51 247.64 1577.71 245.695 1574.05C241.946 1567.01 238.493 1560.53 235.752 1553.11C231.579 1541.82 228.265 1529.66 226.307 1519.2C225.328 1513.97 224.699 1509.22 224.462 1505.25C224.219 1501.2 224.407 1498.27 224.868 1496.52C225.785 1493.04 229.823 1486.84 239.83 1478.73C249.681 1470.76 264.866 1461.3 287.158 1451.14C310.095 1440.69 325.982 1429.86 342.805 1409.96C359.449 1390.26 376.996 1361.7 403.461 1316.01C456.66 1224.16 518.769 1078.86 572.328 902.16Z"
            fill="#79616E"
            stroke="#9B808E"
            stroke-width="8"
          />
          <g id="Right Bulk Bg" {...focusProps(null)}>
            <path
              id="Right Bulk Bg_2"
              d="M2635.71 1755.23L2635.2 1756.76L2635.89 1758.22C2637.43 1761.45 2643.09 1775.72 2652.69 1805.72C2655.41 1814.21 2655.52 1828.12 2653.48 1846.17C2651.46 1864.04 2647.4 1885.4 2642.22 1908.44C2634.63 1942.21 2624.71 1979.35 2615.41 2014.14C2612.02 2026.83 2608.71 2039.2 2605.63 2050.99C2594.05 2095.29 2581.28 2179.54 2571.4 2262.46C2561.53 2345.41 2554.5 2427.49 2554.5 2467.5C2554.5 2499.79 2566.69 2570.43 2581.77 2645.14C2596.86 2719.92 2614.96 2799.31 2627.05 2849.69L2672.54 3263H1875.1C1866.64 3181.88 1849.95 3020.97 1847.99 2998.16C1847.64 2994.14 1846.04 2986.92 1843.63 2977.59C1841.19 2968.15 1837.84 2956.23 1833.86 2942.64C1825.91 2915.46 1815.41 2881.5 1804.63 2847.05C1798.77 2828.33 1792.82 2809.48 1787.16 2791.5C1771.94 2743.24 1758.71 2701.28 1754.36 2684.97C1748.44 2662.74 1742.09 2624.34 1737.22 2587.17C1732.34 2549.98 1729 2514.46 1729 2498C1729 2490.16 1731.69 2474.98 1736.36 2455.23C1740.99 2435.64 1747.47 2411.97 1754.83 2387.4C1769.57 2338.2 1787.75 2285.66 1801.64 2255.16C1815.81 2224.03 1835.64 2156.43 1854.75 2081.3C1873.89 2006.04 1892.41 1922.83 1903.93 1860.22C1926.98 1734.98 1944.49 1525.79 1947.5 1464.7C1948.27 1448.97 1945.7 1427.04 1941.5 1402.86C1937.28 1378.61 1931.37 1351.8 1925.33 1326.21C1921.25 1308.93 1917.11 1292.15 1913.38 1277.08C1911.59 1269.85 1909.9 1263.01 1908.36 1256.69C1905.99 1246.94 1903.97 1238.45 1902.5 1231.66C1901.02 1224.78 1900.16 1219.91 1899.99 1217.25C1898.51 1193.6 1903.48 1104.39 1906.98 1067.38C1908.69 1049.29 1915.84 1020.25 1924.66 989.09C1932.96 959.769 1942.66 928.882 1950.45 904.05C1950.91 902.577 1951.37 901.126 1951.82 899.697C1959.92 873.876 1966.83 836.236 1971.77 802.009C1976.71 767.787 1979.74 736.586 1980 723.578C1980.13 716.857 1978.83 703.775 1976.79 687.743C1974.73 671.596 1971.86 652.148 1968.76 632.502C1962.57 593.239 1955.44 553.022 1951.91 536.658C1944.99 504.538 1939.01 435.868 1940.5 384.115C1941.24 358.329 1944.59 326.66 1949.81 298.734C1952.41 284.772 1955.47 271.815 1958.88 261.033C1961.96 251.274 1965.24 243.579 1968.56 238.531C1975.97 238.733 1991.44 239.982 2007.03 243.881C2012.01 245.125 2020.61 248.995 2031.75 254.763C2042.75 260.463 2055.86 267.818 2069.69 275.779C2080.18 281.819 2091.1 288.215 2101.81 294.485C2119.23 304.69 2136.08 314.559 2149.57 322.002C2193.11 346.026 2336.68 421.063 2377.26 440.604C2396.93 450.072 2417.93 467.582 2435.83 484.299C2444.56 492.445 2452.47 500.329 2459.07 506.906L2459.5 507.333C2466.09 513.904 2471.53 519.32 2474.99 522.112C2475.88 522.833 2477.43 524.544 2479.63 527.405C2481.76 530.176 2484.3 533.77 2487.16 538.014C2492.88 546.497 2499.77 557.426 2506.99 569.235C2521.41 592.844 2537.03 619.829 2547.02 637.47L2547.14 637.679L2547.28 637.873C2550.04 641.613 2558.35 649.774 2571.35 655.645C2578.52 658.882 2586.84 665.488 2597.15 673.965C2597.93 674.612 2598.73 675.268 2599.54 675.932C2609.13 683.834 2620.14 692.903 2632.78 701.328C2645.49 709.801 2660.73 728.998 2675.7 753.816C2690.57 778.469 2704.84 808.125 2715.76 836.919C2732.9 882.096 2722.89 933.978 2715.73 954.162L2715.06 956.051L2716.17 957.719C2718.81 961.673 2726.31 973.228 2735.09 987.586C2737.56 991.625 2740.19 998.309 2742.78 1007.09C2745.35 1015.8 2747.81 1026.31 2750.01 1037.81C2754.41 1060.83 2757.77 1087.65 2759.01 1111.71C2759.48 1120.93 2758.04 1134.07 2755.27 1149.51C2752.5 1164.88 2748.47 1182.27 2743.88 1199.92C2734.7 1235.2 2723.36 1271.28 2715.71 1293.71L2715.23 1295.14L2715.8 1296.53C2722.47 1312.63 2735.68 1357.08 2734.5 1404.4C2734.21 1415.9 2730.02 1437.4 2723.21 1465.11C2716.43 1492.67 2707.16 1525.98 2696.9 1560.87C2676.38 1630.65 2651.95 1706.6 2635.71 1755.23Z"
              fill="#79616E"
              stroke="#9B808E"
              stroke-width="8"
            />
            <path
              id="Vector 244"
              d="M2717 950.5C2701.8 994.1 2677 1034.67 2666.5 1049.5"
              stroke="#9B808E"
              stroke-width="8"
              stroke-linecap="round"
            />
            <path
              id="Vector 245"
              d="M2722 1275C2709.6 1311 2694.5 1343.67 2688.5 1355"
              stroke="#9B808E"
              stroke-width="8"
              stroke-linecap="round"
            />
            <path
              id="Vector 246"
              d="M2541 626.5C2558.2 658.9 2563.5 709.333 2564 730.5M2639 1745.5C2625 1788.7 2605.5 1823.83 2597.5 1835.5"
              stroke="#9B808E"
              stroke-width="8"
              stroke-linecap="round"
            />
          </g>
          <g
            id="Anterior Chromatophoral Sac"
            {...focusProps(Structure.ChromatophoralSac)}
          >
            <path
              id="Sac Body_4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1270.31 526.363C1206.73 492.439 1184.81 487.559 1154.5 497C1124 506.5 1073 570 1062 589.5C1051 609 1015 695 1006.5 729C998 763 988.5 839 987 866.5C985.5 894 989.5 941 998 965.5C1006.5 990 1022.5 1014 1038 1026C1053.5 1038 1079.5 1049.5 1097.5 1050.5C1103.01 1050.81 1108.94 1051.67 1114.89 1052.55C1128.38 1054.52 1141.98 1056.51 1151 1052C1161.4 1046.8 1168.67 1042.5 1171 1041L1171.23 1039.81C1138.09 1021.21 1083.9 944.573 1123 779.495C1162.6 612.295 1236.17 541.157 1268 526.491L1270.31 526.363Z"
              fill="#E1F07D"
            />
            <path
              id="Subtract"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1117.9 957.105C1123.15 976.91 1130.36 993.003 1138.27 1005.72C1134.49 1007.81 1130.13 1009 1125.5 1009C1110.86 1009 1099 997.136 1099 982.5C1099 970.505 1106.97 960.371 1117.9 957.105ZM1109.39 889.083C1109.56 908.719 1111.4 926.263 1114.42 941.841C1113.46 941.946 1112.49 942 1111.5 942C1096.86 942 1085 930.136 1085 915.5C1085 901.574 1095.74 890.156 1109.39 889.083ZM1114.59 822.178C1111.65 841.12 1110.05 858.683 1109.55 874.93C1095.83 873.933 1085 862.481 1085 848.5C1085 833.864 1096.86 822 1111.5 822C1112.55 822 1113.58 822.061 1114.59 822.178ZM1129 755.804C1126.93 763.477 1124.92 771.373 1123 779.495C1120.72 789.111 1118.76 798.427 1117.09 807.448C1105.05 804.952 1096 794.283 1096 781.5C1096 766.864 1107.86 755 1122.5 755C1124.74 755 1126.92 755.279 1129 755.804ZM1148.74 694.305C1142.89 709.84 1137.3 726.599 1132.11 744.646C1121.59 741.138 1114 731.205 1114 719.5C1114 704.864 1125.86 693 1140.5 693C1143.38 693 1146.15 693.458 1148.74 694.305ZM1174.43 636.353C1166.91 650.821 1159.53 666.872 1152.49 684.611C1143.35 680.43 1137 671.206 1137 660.5C1137 645.864 1148.86 634 1163.5 634C1167.4 634 1171.1 634.842 1174.43 636.353ZM1213.04 575.713C1203.41 587.918 1193.43 602.492 1183.55 619.668C1177.14 614.831 1173 607.15 1173 598.5C1173 583.864 1184.86 572 1199.5 572C1204.45 572 1209.07 573.355 1213.04 575.713Z"
              fill="#EA9C55"
            />
          </g>
          <g
            id="Lower Vibratory Plate"
            {...focusProps(Structure.VibratoryMembrane)}
          >
            <path
              id="Bone Border"
              d="M1400.02 2488.72L1400.36 2490.2L1401.59 2489.31C1419.22 2476.46 1439.54 2453.11 1456.63 2428.89C1473.71 2404.68 1487.66 2379.44 1492.46 2362.78C1493.56 2358.96 1494.63 2355.36 1495.64 2351.98C1496.8 2348.1 1497.87 2344.51 1498.79 2341.21C1500.53 2335.01 1501.8 2329.69 1502.25 2325.1C1502.69 2320.5 1502.32 2316.54 1500.7 2313.13C1499.07 2309.71 1496.24 2306.94 1491.98 2304.62C1483.68 2300.1 1474.07 2296.04 1465.37 2294.45C1456.71 2292.87 1448.6 2293.68 1443.74 2299.35C1443.08 2300.12 1442.4 2301.37 1441.7 2302.94C1440.99 2304.52 1440.22 2306.52 1439.41 2308.86C1437.79 2313.55 1435.96 2319.65 1434 2326.68C1430.08 2340.73 1425.62 2358.54 1421.22 2376.2L1420.82 2377.8C1416.55 2394.91 1412.34 2411.77 1408.73 2424.82C1406.87 2431.55 1405.17 2437.26 1403.71 2441.46C1402.98 2443.56 1402.31 2445.26 1401.72 2446.52C1401.42 2447.15 1401.16 2447.66 1400.91 2448.04C1400.67 2448.43 1400.48 2448.63 1400.38 2448.72C1398.56 2450.17 1397.61 2452.85 1397.13 2455.92C1396.64 2459.04 1396.59 2462.81 1396.81 2466.73C1397.26 2474.58 1398.77 2483.19 1400.02 2488.72Z"
              fill="#E0CFBE"
              stroke="#857262"
              stroke-width="2"
            />
            <path
              id="Bone Dark Inner"
              d="M1491.5 2362.5C1482 2395.5 1436 2463 1401 2488.5C1398.5 2477.5 1395 2454.3 1401 2449.5C1408.5 2443.5 1435.5 2310.5 1444.5 2300C1453.5 2289.5 1475 2296.5 1491.5 2305.5C1508 2314.5 1501 2329.5 1491.5 2362.5Z"
              fill="#887E72"
            />
            <path
              id="Bone Grey Layer"
              d="M1481.89 2359.73C1477.61 2374.59 1464.52 2398.61 1447.64 2422.55C1435.1 2440.32 1421.08 2457.18 1408.05 2469.5C1407.95 2468.36 1407.86 2467.22 1407.8 2466.11C1407.6 2462.55 1407.68 2459.65 1408 2457.63C1408.08 2457.06 1408.18 2456.67 1408.25 2456.41C1409.19 2455.46 1409.83 2454.52 1410.2 2453.93C1410.78 2453.02 1411.27 2452.07 1411.68 2451.19C1412.5 2449.43 1413.31 2447.33 1414.1 2445.07C1415.68 2440.53 1417.45 2434.55 1419.33 2427.75C1422.98 2414.56 1427.22 2397.59 1431.47 2380.55L1431.89 2378.86C1436.31 2361.17 1440.72 2343.51 1444.59 2329.63C1446.53 2322.68 1448.29 2316.83 1449.8 2312.47C1450.56 2310.28 1451.21 2308.61 1451.74 2307.42C1452.01 2306.82 1452.2 2306.47 1452.28 2306.31C1453.34 2305.29 1456.23 2303.97 1463.39 2305.27C1470.5 2306.57 1478.95 2310.04 1486.71 2314.28C1489.51 2315.8 1490.38 2317.05 1490.77 2317.86C1491.21 2318.8 1491.64 2320.53 1491.3 2324.03C1490.95 2327.6 1489.91 2332.13 1488.2 2338.24C1487.27 2341.57 1486.26 2344.95 1485.14 2348.69C1484.15 2352.02 1483.07 2355.63 1481.89 2359.73ZM1408.38 2456C1408.38 2456 1408.38 2456.01 1408.37 2456.04C1408.38 2456.01 1408.38 2456 1408.38 2456Z"
              stroke="#E0CFBE"
              stroke-width="20"
            />
            <path
              id="Bone White Surface"
              d="M1488.62 2361.67C1484.01 2377.68 1470.37 2402.47 1453.36 2426.58C1437.59 2448.94 1419.21 2470.3 1402.97 2483.23C1402.02 2478.25 1401.13 2472.15 1400.81 2466.51C1400.59 2462.72 1400.65 2459.26 1401.08 2456.54C1401.54 2453.64 1402.31 2452.3 1402.87 2451.84C1403.49 2451.35 1403.96 2450.71 1404.29 2450.18C1404.66 2449.61 1405.01 2448.94 1405.34 2448.22C1406.02 2446.78 1406.74 2444.93 1407.49 2442.77C1408.99 2438.45 1410.72 2432.64 1412.59 2425.89C1416.21 2412.78 1420.43 2395.89 1424.69 2378.8L1425.1 2377.16C1429.51 2359.5 1433.95 2341.74 1437.85 2327.75C1439.8 2320.75 1441.6 2314.74 1443.19 2310.18C1443.98 2307.89 1444.7 2306.01 1445.35 2304.57C1446.03 2303.05 1446.51 2302.26 1446.78 2301.95C1450.19 2297.97 1456.36 2296.88 1464.65 2298.39C1472.78 2299.87 1481.96 2303.71 1490.06 2308.13C1493.79 2310.17 1495.91 2312.38 1497.09 2314.85C1498.28 2317.37 1498.67 2320.51 1498.26 2324.71C1497.85 2328.93 1496.67 2333.96 1494.94 2340.13C1494.01 2343.44 1492.96 2346.95 1491.82 2350.78C1490.82 2354.14 1489.75 2357.75 1488.62 2361.67Z"
              stroke="white"
              stroke-width="6"
            />
          </g>
          <g
            id="Upper Vibratory Plate"
            {...focusProps(Structure.VibratoryMembrane)}
          >
            <path
              id="Bone Border_2"
              d="M1514.44 2076.66L1513.42 2073.83L1512.54 2076.71L1452.54 2273.21L1452.44 2273.54L1452.57 2273.87C1454.11 2277.72 1457.44 2283.79 1462.47 2289.62C1467.49 2295.44 1474.26 2301.07 1482.68 2303.95C1487.83 2305.71 1492.37 2306.92 1496.29 2307.41C1500.2 2307.89 1503.57 2307.67 1506.33 2306.48C1511.99 2304.04 1514.5 2297.82 1514.5 2287.5C1514.5 2285.02 1514.93 2281.09 1515.64 2275.9C1516.17 2272.06 1516.85 2267.55 1517.61 2262.49C1517.87 2260.75 1518.15 2258.95 1518.43 2257.08C1520.61 2242.47 1523.24 2224.09 1525 2203.9C1528.5 2163.55 1528.52 2115.87 1514.44 2076.66Z"
              fill="#E0CFBE"
              stroke="#857262"
              stroke-width="2"
            />
            <path
              id="Bone Dark Inner_2"
              d="M1513.5 2287.5C1513.5 2267 1541.5 2155 1513.5 2077L1453.5 2273.5C1456.5 2281 1466.6 2297.4 1483 2303C1503.5 2310 1513.5 2308 1513.5 2287.5Z"
              fill="#887E72"
            />
            <path
              id="Bone Grey Layer_2"
              d="M1464.18 2272.76L1512.55 2114.37C1517.13 2143.32 1516.5 2174.58 1514.04 2202.95C1512.32 2222.78 1509.73 2240.89 1507.55 2255.45C1507.27 2257.28 1507.01 2259.06 1506.75 2260.78C1505.98 2265.87 1505.28 2270.48 1504.74 2274.41C1504.04 2279.51 1503.5 2284.15 1503.5 2287.5C1503.5 2291.97 1502.93 2294.43 1502.41 2295.64C1502.2 2296.15 1502.04 2296.33 1502.01 2296.36C1502 2296.37 1501.99 2296.37 1501.97 2296.38C1501.72 2296.49 1500.56 2296.85 1497.65 2296.49C1494.8 2296.14 1491.07 2295.19 1486.23 2293.54C1480.23 2291.49 1475.01 2287.31 1470.8 2282.43C1467.83 2278.99 1465.62 2275.49 1464.18 2272.76Z"
              stroke="#E0CFBE"
              stroke-width="20"
            />
            <path
              id="Bone White Surface_2"
              d="M1456.69 2273.34L1513.6 2086.95C1524.44 2123.52 1524.24 2166.42 1521.01 2203.55C1519.27 2223.61 1516.66 2241.9 1514.47 2256.49C1514.19 2258.34 1513.92 2260.13 1513.66 2261.87C1512.89 2266.94 1512.21 2271.48 1511.68 2275.36C1510.97 2280.51 1510.5 2284.7 1510.5 2287.5C1510.5 2297.53 1508.03 2301.39 1504.75 2302.81C1502.9 2303.61 1500.33 2303.88 1496.79 2303.44C1493.26 2303 1489.01 2301.88 1483.97 2300.16C1476.43 2297.59 1470.22 2292.48 1465.5 2287C1461.18 2282 1458.22 2276.82 1456.69 2273.34Z"
              stroke="white"
              stroke-width="6"
            />
          </g>
          <g id="Spongy Masses" {...focusProps(null)}>
            <path
              id="Vector 25"
              d="M1487.26 2209.31C1464.19 2309.79 1429.52 2413.29 1403.58 2480.61L1328.94 2407.34C1349.23 2308.46 1382.22 2168.46 1415.99 2066.21C1433.08 2014.44 1450.17 1972.99 1465.65 1951.28C1469.49 1945.89 1473.08 1941.94 1476.37 1939.37C1479.66 1936.79 1482.32 1935.86 1484.4 1935.84C1488.17 1935.8 1493.58 1939.05 1499.41 1952.49C1510.73 1978.57 1513.82 2016.48 1510.92 2061.41C1508.02 2106.17 1499.21 2157.27 1487.26 2209.31Z"
              fill="url(#pattern0)"
              stroke="#DDA778"
              stroke-width="10"
            />
            <path
              id="Vector 23"
              d="M1120.97 1437.5C1115.97 1444.97 1112.1 1452.58 1109.5 1458.68C1091.39 1447.9 1065.29 1432.98 1040.11 1419.84C1026.3 1412.63 1012.71 1405.93 1000.86 1400.74C989.132 1395.61 978.685 1391.78 971.31 1390.57C966.254 1389.74 959.461 1390.3 951.803 1391.62C944.011 1392.97 934.819 1395.21 924.733 1398.06C904.553 1403.77 880.446 1412.04 856.157 1420.93C831.85 1429.82 807.275 1439.37 786.144 1447.66C782.063 1449.26 778.115 1450.81 774.324 1452.3C758.435 1458.54 745.305 1463.7 736.787 1466.8C714.683 1474.86 692.51 1490.96 674.202 1506.5C660.79 1517.88 649.096 1529.29 640.961 1537.23C638.004 1540.12 635.517 1542.54 633.588 1544.34C627.944 1549.61 613.324 1559.96 596.9 1570.99C582.586 1580.6 567.248 1590.5 556.128 1597.56C553.943 1593.03 551.065 1584.76 549.98 1572.56C548.055 1550.89 553.897 1513.54 559.329 1493.3C560.849 1487.63 562.311 1473.97 563.678 1457.36C565.066 1440.49 566.397 1419.96 567.554 1400.1C568.711 1380.24 569.697 1361.02 570.392 1346.77C570.74 1339.64 571.016 1333.75 571.205 1329.65C571.299 1327.6 571.372 1325.99 571.421 1324.9C571.445 1324.35 571.464 1323.93 571.476 1323.65L571.477 1323.63C580.039 1283.81 617.701 1247.84 674.29 1217.36C730.797 1186.93 804.957 1162.66 883.914 1145.79C962.834 1128.92 1046.3 1119.49 1121.32 1118.63C1196.45 1117.77 1262.62 1125.52 1307.21 1142.67C1308.67 1143.23 1309.56 1144.03 1310.18 1145.03C1310.84 1146.11 1311.36 1147.72 1311.51 1150.09C1311.82 1154.94 1310.56 1161.72 1307.96 1170.3C1305.4 1178.78 1301.72 1188.48 1297.59 1199.04C1296.77 1201.16 1295.92 1203.31 1295.06 1205.48C1291.67 1214.1 1288.11 1223.15 1284.8 1232.3C1276.08 1256.34 1278.8 1278.08 1282.13 1297.59C1282.47 1299.57 1282.81 1301.52 1283.15 1303.44C1286.2 1320.82 1288.85 1335.88 1284.69 1350.64C1282.75 1357.53 1275.87 1364.3 1264.51 1370.81C1253.37 1377.2 1238.98 1382.75 1223.83 1387.68C1211.68 1391.64 1199.25 1395.14 1187.81 1398.37C1185 1399.16 1182.24 1399.94 1179.57 1400.7C1166.28 1404.48 1154.49 1408.03 1147.69 1411.56C1136.62 1417.32 1127.63 1427.53 1120.97 1437.5Z"
              fill="url(#pattern1)"
              stroke="#DDA778"
              stroke-width="10"
            />
            <path
              id="Vector 24"
              d="M536.404 2233.13C521.266 2204.99 522.327 2170.47 530.035 2130.32C533.875 2110.31 539.301 2089.19 544.997 2067.02L544.999 2067.01C550.286 2046.43 555.796 2024.98 560.387 2002.94L779.969 2049.72C773.703 2068.57 765.668 2095.42 759.96 2120.71C756.827 2134.59 754.367 2148.13 753.307 2159.66C752.274 2170.9 752.457 2181.22 755.417 2188C757.989 2193.89 759.151 2202.57 758.908 2213.33C758.666 2223.99 757.061 2236.23 754.475 2248.94C749.299 2274.39 740.298 2301.23 731.005 2320.31C727.86 2326.77 721.002 2332.89 711.037 2338.49C701.172 2344.03 688.834 2348.75 675.574 2352.65C651.213 2359.84 624.346 2364.14 605.396 2366.06C604.283 2357.68 601.945 2344.35 598.212 2333.83C596.63 2329.37 593.824 2324.49 590.27 2318.99C587.665 2314.96 584.515 2310.38 580.948 2305.2C579.625 2303.27 578.245 2301.27 576.814 2299.18C566.18 2283.63 552.288 2262.67 536.404 2233.13Z"
              fill="url(#pattern2)"
              stroke="#DDA778"
              stroke-width="10"
              stroke-linejoin="round"
            />
          </g>
          <g
            id="Lower Dentiform"
            {...focusProps(Structure.DentiformProjection)}
          >
            <path
              id="Lower Dentiform Muscle"
              d="M776.5 2046C745 2047 660.5 2132.5 637 2133C617.167 2081.83 589.4 1978.6 637 1975C696.5 1970.5 738.5 2016.5 776.5 2046Z"
              fill="#DF7264"
            />
            <g id="Lower Dentiform Segment 2">
              <path
                id="Bone Border_3"
                d="M564.114 2097.96C566.734 2102.97 567.749 2110.86 567.189 2121.57C566.631 2132.24 564.519 2145.55 561.027 2161.27C559.765 2166.24 558.304 2174.12 558.013 2181.7C557.868 2185.49 558.014 2189.24 558.641 2192.52C559.265 2195.78 560.385 2198.69 562.273 2200.69C563.489 2201.97 565.303 2202.97 567.47 2203.75C569.65 2204.54 572.268 2205.14 575.169 2205.58C580.973 2206.47 588.019 2206.75 595.205 2206.62C609.557 2206.37 624.655 2204.5 631.775 2202.46C639.28 2200.32 643.325 2193.76 644.612 2185.98C645.898 2178.19 644.481 2168.99 640.911 2161.09C637.525 2153.59 637.373 2143.57 638.184 2133.77C638.577 2129.03 639.189 2124.39 639.748 2120.16L639.796 2119.79C640.364 2115.49 640.872 2111.6 640.999 2108.54C641.119 2105.67 641.899 2102.49 642.922 2098.92C643.18 2098.01 643.454 2097.09 643.734 2096.13C644.555 2093.35 645.434 2090.37 646.162 2087.23C648.125 2078.74 649.029 2068.9 644.94 2057.66C642.793 2051.75 637.65 2048.16 631.235 2046.1C624.823 2044.05 616.991 2043.47 609.159 2043.69C593.495 2044.13 577.523 2047.77 572.184 2049.55C569.138 2050.57 566.861 2053.63 565.207 2057.45C563.532 2061.31 562.39 2066.19 561.758 2071.25C561.125 2076.31 560.997 2081.6 561.378 2086.3C561.757 2090.97 562.646 2095.16 564.114 2097.96Z"
                fill="#E0CFBE"
                stroke="#857262"
                stroke-width="2"
              />
              <path
                id="Bone Dark Inner_3"
                d="M565 2097.5C570.5 2108 569 2130 562 2161.5C559.5 2171.33 556.2 2192.8 563 2200C571.5 2209 617.5 2205.5 631.5 2201.5C645.5 2197.5 647 2177 640 2161.5C633 2146 639.5 2120.5 640 2108.5C640.5 2096.5 652 2080 644 2058C636 2036 583 2047 572.5 2050.5C562 2054 559.5 2087 565 2097.5Z"
                fill="#887E72"
              />
              <path
                id="Bone Grey Layer_3"
                d="M571.692 2163.96L571.729 2163.82L571.762 2163.67C575.319 2147.66 577.57 2133.68 578.174 2122.15C578.758 2110.98 577.905 2100.59 573.858 2092.86C573.416 2092.02 572.68 2089.58 572.342 2085.41C572.026 2081.51 572.127 2076.98 572.673 2072.62C573.227 2068.18 574.178 2064.41 575.3 2061.82C575.8 2060.67 576.197 2060.05 576.417 2059.75C581.551 2058.19 595.671 2055.07 609.468 2054.68C616.748 2054.48 623.163 2055.06 627.875 2056.58C632.557 2058.08 634.068 2059.95 634.602 2061.42C637.713 2069.97 637.126 2077.48 635.445 2084.75C634.797 2087.55 634.05 2090.08 633.258 2092.77C632.959 2093.78 632.655 2094.81 632.346 2095.89C631.318 2099.49 630.188 2103.78 630.009 2108.08C629.906 2110.54 629.481 2113.89 628.891 2118.36L628.832 2118.8C628.28 2122.98 627.637 2127.85 627.222 2132.86C626.395 2142.85 626.253 2155.36 630.886 2165.62C633.685 2171.81 634.645 2178.82 633.759 2184.18C632.876 2189.52 630.701 2191.33 628.753 2191.88C622.948 2193.54 608.929 2195.38 595.013 2195.63C588.15 2195.75 581.784 2195.47 576.831 2194.71C574.35 2194.33 572.487 2193.87 571.206 2193.41C570.715 2193.23 570.395 2193.08 570.207 2192.99C570.049 2192.67 569.725 2191.92 569.445 2190.45C569.031 2188.28 568.878 2185.44 569.005 2182.12C569.259 2175.49 570.569 2168.38 571.692 2163.96Z"
                stroke="#E0CFBE"
                stroke-width="20"
              />
              <path
                id="Bone White Surface_3"
                d="M564.907 2162.24L564.919 2162.2L564.928 2162.15C568.446 2146.32 570.609 2132.77 571.183 2121.78C571.752 2110.91 570.796 2102.1 567.657 2096.11C566.562 2094.02 565.729 2090.46 565.365 2085.98C565.008 2081.57 565.126 2076.56 565.727 2071.75C566.33 2066.92 567.403 2062.44 568.878 2059.04C570.417 2055.48 572.086 2053.8 573.449 2053.35C578.43 2051.69 594.014 2048.12 609.272 2047.69C616.902 2047.47 624.219 2048.05 630.013 2049.91C635.798 2051.77 639.62 2054.74 641.181 2059.03C644.914 2069.29 644.125 2078.28 642.265 2086.32C641.566 2089.34 640.736 2092.16 639.924 2094.91C639.637 2095.89 639.352 2096.85 639.077 2097.82C638.052 2101.4 637.144 2104.98 637.003 2108.38C636.884 2111.21 636.407 2114.91 635.83 2119.27L635.778 2119.67C635.222 2123.88 634.598 2128.6 634.198 2133.44C633.381 2143.3 633.426 2154.23 637.266 2162.73C640.555 2170.02 641.806 2178.42 640.665 2185.32C639.525 2192.22 636.16 2197.05 630.676 2198.62C624.034 2200.51 609.329 2202.38 595.135 2202.63C588.067 2202.75 581.268 2202.47 575.773 2201.63C573.025 2201.21 570.682 2200.66 568.828 2199.99C566.934 2199.31 565.784 2198.58 565.181 2197.94C564.044 2196.74 563.129 2194.69 562.57 2191.77C562.02 2188.89 561.871 2185.47 562.01 2181.85C562.288 2174.62 563.695 2167.01 564.907 2162.24Z"
                stroke="white"
                stroke-width="6"
              />
            </g>
            <g id="Lower Dentiform Segment 1">
              <path
                id="Bone Border_4"
                d="M572.542 2001.71L572.518 2001.79L572.507 2001.88C571.917 2006.68 571.488 2014.38 572.116 2021.9C572.43 2025.66 573.01 2029.4 573.979 2032.72C574.945 2036.04 576.316 2039.01 578.257 2041.17C587.488 2051.43 606.441 2058.63 623.414 2050.91C632.093 2046.97 636.7 2037.7 639.034 2028.11C641.378 2018.48 641.503 2008.24 640.997 2001.92C640.585 1996.78 640.86 1989.39 641.181 1980.75C641.245 1979.02 641.311 1977.24 641.374 1975.41C641.749 1964.53 642.002 1952.23 640.996 1940.42C640.781 1937.88 639.763 1934.94 638.168 1931.73C636.567 1928.5 634.352 1924.94 631.681 1921.16C626.339 1913.59 619.122 1905.06 611.198 1896.46C595.347 1879.26 576.595 1861.68 564.16 1850.75L561.918 1848.78L562.521 1851.7C565.852 1867.86 573.626 1904.03 578.039 1919.28C583.47 1938.04 583.506 1965.33 572.542 2001.71Z"
                fill="#E0CFBE"
                stroke="#857262"
                stroke-width="2"
              />
              <path
                id="Bone Dark Inner_4"
                d="M579 1919C584.5 1938 584.5 1965.5 573.5 2002C572.333 2011.5 571.8 2032.5 579 2040.5C588 2050.5 606.5 2057.5 623 2050C639.5 2042.5 641 2014.5 640 2002C639 1989.5 642 1964 640 1940.5C638.4 1921.7 588.333 1873.33 563.5 1851.5C566.833 1867.67 574.6 1903.8 579 1919Z"
                fill="#887E72"
              />
              <path
                id="Bone Grey Layer_4"
                d="M583.078 2020.98C582.559 2014.76 582.864 2008.28 583.331 2004.03C594.445 1966.72 594.753 1937.46 588.606 1916.22C586.296 1908.24 582.986 1894.12 579.903 1880.27C587.644 1887.75 595.71 1895.88 603.108 1903.91C610.882 1912.35 617.742 1920.48 622.694 1927.5C625.17 1931.01 627.049 1934.07 628.315 1936.62C629.643 1939.3 629.99 1940.8 630.036 1941.35C630.981 1952.46 630.755 1964.2 630.381 1975.03C630.322 1976.73 630.258 1978.43 630.195 1980.12C629.872 1988.72 629.564 1996.95 630.032 2002.8C630.473 2008.31 630.341 2017.32 628.346 2025.51C626.251 2034.12 622.815 2039.1 618.862 2040.9C607.093 2046.25 593.115 2041.24 586.433 2033.81C586.036 2033.37 585.269 2032.15 584.54 2029.65C583.841 2027.25 583.354 2024.28 583.078 2020.98Z"
                stroke="#E0CFBE"
                stroke-width="20"
              />
              <path
                id="Bone White Surface_4"
                d="M576.102 2021.56C575.512 2014.5 575.9 2007.22 576.447 2002.62C587.482 1965.88 587.577 1937.84 581.882 1918.17C578.205 1905.46 572.123 1877.87 568.304 1859.82C580.12 1870.54 595.193 1884.99 608.256 1899.17C616.125 1907.71 623.213 1916.09 628.413 1923.46C631.013 1927.15 633.106 1930.53 634.585 1933.51C636.083 1936.53 636.857 1938.95 637.011 1940.75C637.994 1952.31 637.751 1964.41 637.377 1975.27C637.315 1977.05 637.25 1978.81 637.186 1980.52C636.864 1989.15 636.578 1996.84 637.009 2002.24C637.492 2008.27 637.365 2018.06 635.148 2027.17C632.9 2036.4 628.72 2044.1 621.759 2047.27C606.678 2054.12 589.535 2047.72 581.23 2038.49C579.851 2036.96 578.699 2034.63 577.819 2031.61C576.949 2028.62 576.402 2025.16 576.102 2021.56Z"
                stroke="white"
                stroke-width="6"
              />
            </g>
          </g>
          <g id="Palatiform" {...focusProps(Structure.PalatiformicPad)}>
            <path
              id="Vector 8"
              d="M846 1544.5C808 1536 781 1527.5 737 1481L789 1442C839.5 1427.33 949.9 1399.5 987.5 1405.5C1025.1 1411.5 1088.5 1448.17 1112.5 1464.5C1108.5 1474 1092.7 1497.4 1055.5 1523C1009 1555 901.215 1556.85 846 1544.5Z"
              fill="#DF7264"
            />
            <path
              id="Vector 9"
              d="M792 1445C876.504 1465.13 967.912 1460.7 1049.5 1430.5C1011.13 1450.55 970.737 1469.41 926.91 1472.57C880.438 1475.91 834.937 1460.96 792 1445Z"
              fill="#E55F4D"
            />
            <path
              id="Vector 10"
              d="M761.513 1465C846.405 1499.21 995.747 1494.87 1075.39 1447.62C980.824 1523.41 864.747 1523.78 761.513 1465Z"
              fill="#E55F4D"
            />
            <path
              id="Vector 11"
              d="M747.5 1478.66C841.28 1538.88 1011.79 1536.66 1097.5 1461.5C1006.09 1562.21 850.095 1561.57 747.5 1478.66Z"
              fill="#E55F4D"
            />
          </g>
          <g
            id="Upper Dentiform"
            {...focusProps(Structure.DentiformProjection)}
          >
            <g id="Upper Dentiform Segment 1">
              <path
                id="Bone Border_5"
                d="M558.618 1703.03L560.14 1704.27C565.626 1699.7 574.632 1692.54 583.81 1685.92C593.019 1679.29 602.297 1673.28 608.361 1670.93C612.383 1669.38 617.512 1666.02 623.013 1661.55C628.532 1657.07 634.489 1651.43 640.174 1645.24C651.513 1632.9 661.892 1618.26 665.458 1606.29C667.158 1600.58 669.932 1593.31 672.94 1585.44L673.137 1584.92C676.214 1576.86 679.506 1568.21 682.079 1560.05C684.647 1551.91 686.526 1544.18 686.734 1537.97C686.94 1531.82 685.504 1526.74 680.924 1524.59C668.009 1518.54 646.72 1513.69 637.7 1512.02C633.215 1511.02 628.437 1510.32 624.436 1511.95C620.306 1513.63 617.295 1517.64 616.014 1525.34C615.291 1529.67 614.402 1538.66 613.326 1549.54C612.532 1557.56 611.636 1566.61 610.631 1575.58C609.444 1586.16 608.103 1596.66 606.593 1605.27C605.838 1609.58 605.043 1613.41 604.208 1616.54C603.367 1619.69 602.504 1622.05 601.643 1623.49C598.346 1628.98 594.103 1637.9 589.602 1647.36C588.938 1648.76 588.27 1650.16 587.598 1651.57C582.34 1662.59 576.869 1673.77 572.164 1680.95C564.554 1692.57 559.97 1700.49 558.618 1703.03Z"
                fill="#E0CFBE"
                stroke="#857262"
                stroke-width="2"
              />
              <path
                id="Bone Dark Inner_5"
                d="M617 1525.5C619.5 1510.5 628.5 1511 637.5 1513C646.5 1514.67 667.7 1519.5 680.5 1525.5C696.5 1533 671.5 1582.5 664.5 1606C657.5 1629.5 623.5 1664 608 1670C595.6 1674.8 570.5 1694.33 559.5 1703.5C560.833 1701 565.4 1693.1 573 1681.5C582.5 1667 595 1636.5 602.5 1624C610 1611.5 614.5 1540.5 617 1525.5Z"
                fill="#887E72"
              />
              <path
                id="Bone Grey Layer_5"
                d="M635.331 1522.76L635.504 1522.8L635.679 1522.83C644.393 1524.45 663.869 1528.94 675.529 1534.22C675.659 1534.74 675.802 1535.76 675.74 1537.6C675.585 1542.24 674.096 1548.79 671.588 1556.74C669.13 1564.54 665.957 1572.89 662.861 1581L662.56 1581.78C659.639 1589.43 656.737 1597.03 654.916 1603.15C652.084 1612.65 643.115 1625.78 632.074 1637.8C626.701 1643.64 621.131 1648.91 616.081 1653.01C610.852 1657.25 606.791 1659.75 604.39 1660.67C600.862 1662.04 596.727 1664.26 592.395 1666.9C594.142 1663.37 595.865 1659.78 597.525 1656.31C598.207 1654.88 598.879 1653.47 599.538 1652.08C604.102 1642.49 608.076 1634.14 611.075 1629.14C612.768 1626.32 613.944 1622.71 614.835 1619.37C615.785 1615.82 616.644 1611.64 617.428 1607.17C618.998 1598.21 620.369 1587.45 621.563 1576.8C622.637 1567.22 623.557 1557.89 624.351 1549.83C625.374 1539.46 626.19 1531.19 626.864 1527.14C627.339 1524.3 628.002 1522.96 628.347 1522.43C628.429 1522.31 628.492 1522.23 628.529 1522.19C628.551 1522.16 628.567 1522.15 628.576 1522.14C628.578 1522.14 628.579 1522.14 628.58 1522.14C628.664 1522.1 629.159 1521.94 630.416 1521.99C631.688 1522.05 633.267 1522.3 635.331 1522.76ZM675.349 1533.76C675.356 1533.75 675.397 1533.81 675.451 1533.96C675.368 1533.85 675.342 1533.77 675.349 1533.76Z"
                stroke="#E0CFBE"
                stroke-width="20"
              />
              <path
                id="Bone White Surface_5"
                d="M636.849 1515.93L636.901 1515.94L636.954 1515.95C645.923 1517.61 666.798 1522.39 679.227 1528.22C681.488 1529.28 682.93 1532.03 682.736 1537.84C682.547 1543.47 680.81 1550.77 678.264 1558.85C675.733 1566.87 672.484 1575.42 669.4 1583.49L669.162 1584.12C666.188 1591.91 663.368 1599.29 661.625 1605.14C658.325 1616.22 648.46 1630.31 637.228 1642.53C631.657 1648.6 625.841 1654.1 620.492 1658.44C615.09 1662.83 610.35 1665.87 606.917 1667.2C600.309 1669.76 590.643 1676.07 581.471 1682.68C577.738 1685.37 574.035 1688.15 570.581 1690.81C572.046 1688.48 573.689 1685.92 575.509 1683.14C580.392 1675.69 585.98 1664.24 591.207 1653.29C591.884 1651.87 592.554 1650.47 593.216 1649.07C597.739 1639.57 601.885 1630.86 605.072 1625.54C606.237 1623.6 607.213 1620.79 608.072 1617.57C608.949 1614.28 609.767 1610.33 610.533 1605.96C612.065 1597.22 613.417 1586.63 614.606 1576.02C615.636 1566.84 616.541 1557.68 617.335 1549.64C618.392 1538.95 619.255 1530.22 619.959 1525.99C621.114 1519.07 623.582 1516.61 625.943 1515.65C628.673 1514.54 632.318 1514.92 636.849 1515.93Z"
                stroke="white"
                stroke-width="6"
              />
            </g>
            <g id="Upper Dentiform Segment 2">
              <path
                id="Bone Border_6"
                d="M822.474 1407.28L822.321 1406.61L821.647 1406.51C808.067 1404.5 799.829 1404.97 791.689 1408.91C784.58 1412.35 777.585 1418.44 767.095 1427.55C765.74 1428.73 764.326 1429.96 762.846 1431.24C740.932 1450.21 722.014 1450.46 700.061 1450.75C696.294 1450.8 692.439 1450.85 688.463 1451C674.569 1451.52 662.076 1460.24 653.411 1470.93C649.068 1476.29 645.654 1482.18 643.48 1487.85C641.312 1493.52 640.353 1499.04 641.01 1503.64C643.559 1521.48 655.408 1531.09 667.135 1529.49C672.796 1528.72 681.921 1525.28 692.403 1520.67C702.927 1516.03 714.945 1510.15 726.447 1504.39C737.874 1498.68 756.812 1491.83 774.623 1486.01C792.428 1480.2 809.016 1475.47 815.717 1473.98C822.574 1472.45 827.542 1469.86 830.186 1465.11C832.807 1460.41 832.991 1453.85 830.976 1444.78C827.775 1430.38 823.975 1413.78 822.474 1407.28Z"
                fill="#E0CFBE"
                stroke="#857262"
                stroke-width="2"
              />
              <path
                id="Bone Dark Inner_6"
                d="M763.5 1432C789.5 1409.5 794.5 1403.5 821.5 1407.5C823 1414 826.8 1430.6 830 1445C834 1463 829 1470 815.5 1473C802 1476 749 1492 726 1503.5C703 1515 678 1527 667 1528.5C656 1530 644.5 1521 642 1503.5C639.5 1486 661.5 1453 688.5 1452C715.5 1451 737.5 1454.5 763.5 1432Z"
                fill="#887E72"
              />
              <path
                id="Bone Grey Layer_6"
                d="M770.044 1439.56C771.429 1438.36 772.739 1437.23 773.983 1436.15C785.014 1426.58 790.778 1421.57 796.483 1418.81C800.682 1416.78 805.14 1415.88 813.326 1416.58C815.173 1424.65 817.871 1436.52 820.238 1447.17C822.09 1455.5 821.177 1458.68 820.577 1459.76C820.202 1460.43 819.011 1461.98 813.331 1463.24C806.092 1464.85 789.094 1469.72 771.21 1475.56C753.383 1481.37 733.755 1488.44 721.528 1494.56C710.045 1500.3 698.23 1506.08 687.969 1510.6C677.295 1515.3 669.542 1518.06 665.649 1518.59C661.916 1519.1 653.91 1516.16 651.9 1502.09C651.599 1499.98 651.972 1496.44 653.753 1491.79C655.481 1487.27 658.287 1482.39 661.956 1477.86C669.493 1468.56 679.309 1462.35 688.87 1461.99C692.477 1461.86 696.101 1461.82 699.748 1461.78C721.906 1461.55 744.912 1461.31 770.044 1439.56Z"
                stroke="#E0CFBE"
                stroke-width="20"
              />
              <path
                id="Bone White Surface_6"
                d="M765.463 1434.27C766.924 1433 768.313 1431.8 769.638 1430.65C780.292 1421.39 786.836 1415.71 793.432 1412.51C800.144 1409.26 807.042 1408.57 819.039 1410.18C820.76 1417.66 824.164 1432.57 827.071 1445.65C829.027 1454.45 828.578 1459.78 826.692 1463.16C824.873 1466.43 821.278 1468.64 814.849 1470.07C807.953 1471.6 791.216 1476.39 773.382 1482.21C755.565 1488.02 736.377 1494.96 724.658 1500.82C713.164 1506.56 701.219 1512.41 690.791 1517C680.238 1521.65 671.613 1524.84 666.595 1525.53C657.775 1526.73 647.323 1519.55 644.97 1503.08C644.442 1499.38 645.189 1494.58 647.216 1489.28C649.227 1484.03 652.42 1478.51 656.518 1473.45C664.773 1463.27 676.293 1455.45 688.611 1455C692.45 1454.86 696.22 1454.81 699.944 1454.76C721.984 1454.49 742.383 1454.24 765.463 1434.27Z"
                stroke="white"
                stroke-width="6"
              />
            </g>
            <g id="Upper Dentiform Segment 3">
              <path
                id="Bone Border_7"
                d="M975.803 1340.9L975.298 1340.22L974.543 1340.61C947.609 1354.45 914.512 1362.78 887.04 1369.69L886.443 1369.84C872.678 1373.31 860.33 1376.43 850.988 1379.72C846.316 1381.37 842.351 1383.07 839.316 1384.91C836.301 1386.73 834.077 1388.76 833.079 1391.11C829.504 1399.54 828.124 1410.69 828.313 1421.02C828.501 1431.32 830.256 1441.01 833.114 1446.46C835.908 1451.8 840.112 1457.67 845.434 1461.97C850.764 1466.27 857.285 1469.04 864.641 1467.99C868.063 1467.5 870.437 1467.53 872.171 1467.6C872.394 1467.61 872.611 1467.62 872.821 1467.63C873.417 1467.66 873.963 1467.68 874.434 1467.67C875.083 1467.67 875.72 1467.61 876.315 1467.36C877.573 1466.85 878.28 1465.69 878.996 1463.93C879.55 1462.58 880.182 1460.66 881.053 1458.02C881.327 1457.19 881.623 1456.29 881.949 1455.32C884.611 1447.33 892.192 1438.1 901.803 1430.6C911.404 1423.11 922.852 1417.47 933.095 1416.5C935.461 1416.27 938.179 1416.06 941.135 1415.82C951.194 1415.04 964.001 1414.03 975.028 1411.6C982.16 1410.03 988.674 1407.84 993.266 1404.65C997.902 1401.43 1000.67 1397.1 999.993 1391.38C998.971 1382.79 994.69 1372.58 989.822 1363.36C984.942 1354.12 979.414 1345.77 975.803 1340.9Z"
                fill="#E0CFBE"
                stroke="#857262"
                stroke-width="2"
              />
              <path
                id="Bone Dark Inner_7"
                d="M834 1391.5C841 1375 920.5 1369.5 975 1341.5C982.167 1351.17 997 1374.7 999 1391.5C1001.5 1412.5 954 1413.5 933 1415.5C912 1417.5 886.5 1438.5 881 1455C875.5 1471.5 878.5 1465 864.5 1467C850.5 1469 839.5 1456.5 834 1446C828.5 1435.5 827 1408 834 1391.5Z"
                fill="#887E72"
              />
              <path
                id="Bone Grey Layer_7"
                d="M839.311 1420.82C839.14 1411.49 840.415 1402.2 843.067 1395.74C843.233 1395.57 843.76 1395.07 845.008 1394.32C847.109 1393.05 850.269 1391.64 854.644 1390.1C863.402 1387.01 875.19 1384.02 889.128 1380.51C889.507 1380.41 889.886 1380.32 890.267 1380.22C914.892 1374.03 945.275 1366.38 971.664 1354.24C974.332 1358.31 977.327 1363.25 980.095 1368.49C984.81 1377.42 988.295 1386.17 989.07 1392.68C989.073 1392.71 989.076 1392.73 989.08 1392.76C989.149 1393.29 989.248 1394.05 986.989 1395.62C984.186 1397.56 979.367 1399.38 972.661 1400.86C962.465 1403.11 950.808 1404.02 940.836 1404.81C937.71 1405.05 934.75 1405.29 932.052 1405.55C918.98 1406.79 905.581 1413.7 895.034 1421.93C884.584 1430.09 875.141 1440.96 871.513 1451.84C871.113 1453.04 870.772 1454.07 870.478 1454.96C870.282 1455.55 870.107 1456.09 869.948 1456.56C868.11 1456.58 865.848 1456.71 863.086 1457.1C859.646 1457.59 856.106 1456.44 852.344 1453.41C848.506 1450.31 845.169 1445.77 842.858 1441.36C841.19 1438.17 839.489 1430.54 839.311 1420.82ZM868.657 1460.13C868.657 1460.13 868.658 1460.13 868.661 1460.12C868.658 1460.13 868.657 1460.13 868.657 1460.13ZM874.272 1456.68C874.327 1456.67 874.342 1456.68 874.31 1456.68C874.297 1456.68 874.285 1456.68 874.272 1456.68Z"
                stroke="#E0CFBE"
                stroke-width="20"
              />
              <path
                id="Bone White Surface_7"
                d="M836.762 1392.67C837.269 1391.48 838.629 1390 841.386 1388.33C844.081 1386.7 847.754 1385.1 852.317 1383.49C861.447 1380.28 873.591 1377.2 887.42 1373.72L888.223 1373.52C914.8 1366.83 947.166 1358.69 974.07 1345.33C977.51 1350.18 982.138 1357.37 986.285 1365.23C991.097 1374.34 995.089 1384.02 996.021 1391.85C996.478 1395.69 994.795 1398.72 990.983 1401.36C987.042 1404.1 981.144 1406.16 974.167 1407.7C963.444 1410.06 951.058 1411.03 941.024 1411.82C938.005 1412.06 935.199 1412.28 932.716 1412.51C921.444 1413.59 909.287 1419.68 899.341 1427.45C889.425 1435.19 881.167 1445.01 878.154 1454.05C877.804 1455.1 877.492 1456.05 877.211 1456.9C876.359 1459.48 875.79 1461.2 875.293 1462.42C875.002 1463.13 874.8 1463.49 874.692 1463.66C874.62 1463.67 874.522 1463.67 874.389 1463.67C874.037 1463.68 873.656 1463.66 873.118 1463.64C872.887 1463.63 872.628 1463.62 872.33 1463.6C870.44 1463.53 867.81 1463.5 864.076 1464.03C858.144 1464.88 852.707 1462.7 847.947 1458.85C843.164 1454.99 839.276 1449.61 836.658 1444.61C834.232 1439.98 832.497 1431.04 832.312 1420.95C832.129 1410.92 833.488 1400.39 836.762 1392.67ZM874.6 1463.79C874.6 1463.79 874.601 1463.79 874.604 1463.79C874.601 1463.79 874.6 1463.79 874.6 1463.79Z"
                stroke="white"
                stroke-width="6"
              />
            </g>
          </g>
          <g id="Lower Limbal Hook Bone">
            <path
              id="Bone Border_8"
              d="M224.523 2097.78L224.529 2097.76L225.5 2098C224.529 2097.76 224.529 2097.76 224.529 2097.76L224.53 2097.76L224.534 2097.74L224.548 2097.68L224.605 2097.45C224.655 2097.25 224.73 2096.94 224.828 2096.55C225.023 2095.75 225.311 2094.59 225.679 2093.11C226.414 2090.14 227.471 2085.91 228.757 2080.8C231.328 2070.6 234.813 2056.94 238.471 2043.12C242.128 2029.3 245.959 2015.32 249.222 2004.48C250.853 1999.06 252.346 1994.41 253.606 1990.95C254.236 1989.22 254.814 1987.77 255.328 1986.67C255.584 1986.12 255.831 1985.64 256.068 1985.25C256.295 1984.87 256.547 1984.51 256.827 1984.26C259.624 1981.72 276.549 1968.68 292.719 1956.76C300.816 1950.79 308.75 1945.07 314.666 1941.07C317.619 1939.07 320.091 1937.48 321.835 1936.5C322.694 1936.02 323.433 1935.65 323.983 1935.47C324.231 1935.38 324.585 1935.28 324.937 1935.32C325.131 1935.35 325.424 1935.42 325.669 1935.67C325.927 1935.94 326 1936.26 326 1936.5C326 1936.68 325.961 1936.86 325.93 1936.98C325.894 1937.12 325.846 1937.27 325.79 1937.43C325.678 1937.75 325.519 1938.14 325.32 1938.61C324.922 1939.54 324.344 1940.79 323.618 1942.33C322.693 1944.28 321.518 1946.71 320.153 1949.53C319.375 1951.14 318.534 1952.88 317.643 1954.73C312.731 1964.93 306.255 1978.6 299.983 1993.39C293.71 2008.18 287.65 2024.08 283.565 2038.72C279.47 2053.4 277.399 2066.69 278.987 2076.34C280.291 2084.27 281.494 2090.54 282.461 2095.57C282.696 2096.8 282.918 2097.95 283.123 2099.04C284.165 2104.55 284.815 2108.43 284.75 2111.33C284.682 2114.34 283.849 2116.41 281.919 2118.22C280.091 2119.94 277.287 2121.41 273.459 2123.39C265.733 2127.38 258.261 2131.18 251.579 2133.03C244.887 2134.87 238.73 2134.83 233.86 2130.77C231.667 2128.94 229.342 2127.44 227.134 2126.09C226.647 2125.79 226.163 2125.5 225.686 2125.21C224.027 2124.2 222.456 2123.25 221.16 2122.31C219.503 2121.1 218.097 2119.76 217.523 2118.09C216.92 2116.34 217.309 2114.48 218.668 2112.45C220.749 2109.32 222.216 2105.67 223.164 2102.77C223.636 2101.32 223.976 2100.08 224.198 2099.19C224.309 2098.75 224.39 2098.4 224.443 2098.16C224.469 2098.04 224.488 2097.95 224.501 2097.89L224.515 2097.82L224.518 2097.81L224.519 2097.81L224.519 2097.81L224.523 2097.78ZM224.523 2097.78L224.519 2097.81L224.523 2097.78Z"
              fill="#E0CFBE"
              stroke="#857262"
              stroke-width="2"
            />
            <path
              id="Bone Dark Inner_8"
              d="M257.5 1985C252 1990 225.5 2098 225.5 2098C225.5 2098 223.805 2106.54 219.5 2113C214.5 2120.5 225.5 2122.5 234.5 2130C243.5 2137.5 257.5 2130.5 273 2122.5C288.5 2114.5 284.5 2116 278 2076.5C271.5 2037 325 1940 325 1936.5C325 1933 263 1980 257.5 1985Z"
              fill="#887E72"
            />
            <g id="Bone Grey Layer_8">
              <mask id="path-167-inside-1_10_1969" fill="white">
                <path d="M257.5 1985C252 1990 225.5 2098 225.5 2098C225.5 2098 223.805 2106.54 219.5 2113C214.5 2120.5 225.5 2122.5 234.5 2130C243.5 2137.5 257.5 2130.5 273 2122.5C288.5 2114.5 284.5 2116 278 2076.5C271.5 2037 325 1940 325 1936.5C325 1933 263 1980 257.5 1985Z" />
              </mask>
              <path
                d="M225.5 2098L206.076 2093.23L205.969 2093.67L205.882 2094.11L225.5 2098ZM219.5 2113L202.859 2101.91L202.859 2101.91L219.5 2113ZM225.5 2098C244.924 2102.77 244.924 2102.77 244.924 2102.77C244.924 2102.76 244.924 2102.76 244.925 2102.76C244.925 2102.76 244.926 2102.76 244.928 2102.75C244.931 2102.74 244.935 2102.72 244.942 2102.69C244.954 2102.64 244.972 2102.57 244.997 2102.47C245.046 2102.27 245.12 2101.97 245.217 2101.58C245.41 2100.79 245.695 2099.64 246.06 2098.17C246.791 2095.22 247.842 2091.01 249.121 2085.93C251.679 2075.77 255.143 2062.2 258.771 2048.49C262.411 2034.74 266.172 2021.03 269.332 2010.53C270.923 2005.24 272.281 2001.04 273.336 1998.14C273.875 1996.66 274.217 1995.85 274.365 1995.54C274.441 1995.37 274.339 1995.61 274.056 1996.08C273.943 1996.27 272.944 1997.99 270.953 1999.8L244.046 1970.2C241.712 1972.32 240.328 1974.55 239.793 1975.44C239.086 1976.62 238.523 1977.75 238.103 1978.65C237.258 1980.47 236.467 1982.49 235.755 1984.44C234.309 1988.41 232.694 1993.46 231.028 1999C227.672 2010.16 223.776 2024.38 220.103 2038.26C216.419 2052.17 212.914 2065.91 210.332 2076.16C209.041 2081.29 207.978 2085.55 207.238 2088.53C206.868 2090.02 206.578 2091.19 206.381 2092C206.282 2092.4 206.206 2092.7 206.155 2092.91C206.129 2093.02 206.11 2093.1 206.097 2093.15C206.09 2093.18 206.085 2093.2 206.082 2093.21C206.08 2093.22 206.079 2093.22 206.078 2093.23C206.077 2093.23 206.077 2093.23 206.077 2093.23C206.076 2093.23 206.076 2093.23 225.5 2098ZM270.953 1999.8C270.879 1999.87 271.095 1999.67 271.821 1999.08C272.464 1998.55 273.322 1997.87 274.385 1997.02C276.506 1995.35 279.297 1993.18 282.544 1990.69C289.033 1985.71 297.196 1979.55 305.183 1973.66C313.215 1967.74 320.878 1962.22 326.437 1958.46C329.307 1956.52 331.184 1955.34 332.133 1954.8C332.855 1954.4 332.133 1954.88 330.679 1955.37C330.519 1955.42 327.093 1956.71 322.528 1956.18C319.872 1955.88 314.946 1954.73 310.682 1950.38C306.132 1945.75 305 1940.23 305 1936.5H345C345 1932.66 343.837 1927.06 339.228 1922.36C334.904 1917.96 329.889 1916.77 327.116 1916.45C322.316 1915.89 318.541 1917.25 317.926 1917.46C315.561 1918.25 313.501 1919.39 312.517 1919.94C310.054 1921.33 307.044 1923.29 304.016 1925.34C297.778 1929.56 289.597 1935.45 281.442 1941.47C265.608 1953.14 247.736 1966.85 244.046 1970.2L270.953 1999.8ZM305 1936.5C305 1933.97 305.508 1932.07 305.593 1931.74C305.763 1931.09 305.924 1930.62 305.979 1930.46C306.092 1930.14 306.139 1930.05 306.012 1930.35C305.779 1930.89 305.344 1931.85 304.636 1933.35C303.221 1936.33 301.255 1940.36 298.723 1945.62C293.767 1955.91 287.119 1969.94 280.649 1985.19C274.211 2000.38 267.767 2017.2 263.337 2033.08C259.1 2048.27 255.89 2065.32 258.265 2079.75L297.734 2073.25C296.859 2067.93 297.9 2058.04 301.866 2043.83C305.639 2030.3 311.351 2015.25 317.475 2000.81C323.569 1986.44 329.889 1973.09 334.761 1962.98C337.144 1958.03 339.306 1953.6 340.792 1950.46C341.533 1948.89 342.241 1947.36 342.789 1946.08C343.052 1945.47 343.4 1944.63 343.715 1943.73C343.87 1943.29 344.108 1942.58 344.329 1941.72C344.465 1941.19 345 1939.14 345 1936.5H305ZM258.265 2079.75C259.941 2089.93 261.48 2097.6 262.488 2102.94C263.008 2105.69 263.349 2107.62 263.557 2109.1C263.772 2110.62 263.751 2111.04 263.755 2110.86C263.761 2110.58 263.825 2109.16 264.598 2107.27C265.431 2105.23 266.624 2103.78 267.533 2102.92C268.24 2102.26 268.59 2102.14 267.782 2102.61C266.982 2103.08 265.847 2103.68 263.827 2104.73L282.173 2140.27C285.115 2138.75 290.732 2136.01 294.935 2132.06C301.167 2126.2 303.583 2118.98 303.745 2111.76C303.864 2106.46 302.731 2100.48 301.793 2095.51C300.708 2089.77 299.309 2082.82 297.734 2073.25L258.265 2079.75ZM263.827 2104.73C255.59 2108.98 250.156 2111.63 245.988 2112.78C242.015 2113.88 244.389 2112.21 247.304 2114.64L221.696 2145.36C233.611 2155.29 247.485 2153.87 256.637 2151.34C265.594 2148.87 274.909 2144.02 282.173 2140.27L263.827 2104.73ZM247.304 2114.64C243.913 2111.81 240.542 2109.67 238.105 2108.18C236.491 2107.19 236.149 2107 234.99 2106.29C234.136 2105.76 233.733 2105.49 233.55 2105.35C233.342 2105.2 233.802 2105.5 234.483 2106.25C235.19 2107.03 236.492 2108.68 237.376 2111.25C238.331 2114.01 238.475 2116.92 237.938 2119.56C237.447 2121.98 236.523 2123.52 236.141 2124.09L202.859 2101.91C199.433 2107.04 196.403 2115.13 199.561 2124.29C202.133 2131.74 207.679 2135.99 209.95 2137.65C212.448 2139.47 215.754 2141.4 217.208 2142.29C219.207 2143.51 220.586 2144.44 221.696 2145.36L247.304 2114.64ZM236.141 2124.09C239.716 2118.73 241.891 2113.07 243.125 2109.29C243.776 2107.3 244.249 2105.57 244.567 2104.3C244.727 2103.66 244.851 2103.13 244.942 2102.72C244.987 2102.52 245.024 2102.34 245.053 2102.21C245.068 2102.14 245.081 2102.07 245.091 2102.02C245.097 2102 245.101 2101.97 245.106 2101.95C245.108 2101.94 245.11 2101.93 245.112 2101.92C245.113 2101.91 245.114 2101.91 245.115 2101.91C245.115 2101.9 245.116 2101.9 245.116 2101.9C245.117 2101.89 245.118 2101.89 225.5 2098C205.882 2094.11 205.883 2094.11 205.883 2094.1C205.884 2094.1 205.884 2094.1 205.885 2094.1C205.885 2094.09 205.886 2094.09 205.887 2094.08C205.889 2094.08 205.89 2094.07 205.891 2094.06C205.894 2094.05 205.897 2094.04 205.899 2094.03C205.903 2094.01 205.905 2093.99 205.906 2093.99C205.909 2093.98 205.905 2094 205.896 2094.04C205.876 2094.12 205.835 2094.31 205.769 2094.57C205.635 2095.11 205.414 2095.92 205.104 2096.86C204.414 2098.98 203.589 2100.81 202.859 2101.91L236.141 2124.09Z"
                fill="#E0CFBE"
                mask="url(#path-167-inside-1_10_1969)"
              />
            </g>
            <path
              id="Bone White Surface_8"
              d="M228.416 2098.71L228.427 2098.66L228.432 2098.64L228.489 2098.41C228.539 2098.2 228.614 2097.9 228.712 2097.5C228.907 2096.71 229.194 2095.55 229.561 2094.07C230.296 2091.11 231.351 2086.88 232.636 2081.78C235.204 2071.58 238.685 2057.94 242.337 2044.14C245.991 2030.34 249.809 2016.41 253.052 2005.63C254.676 2000.23 256.143 1995.67 257.364 1992.32C257.977 1990.64 258.51 1989.31 258.954 1988.36C259.176 1987.88 259.357 1987.54 259.494 1987.31C259.544 1987.23 259.58 1987.18 259.601 1987.14C262.464 1984.59 279.016 1971.83 295.093 1959.98C303.177 1954.01 311.061 1948.34 316.908 1944.38C317.574 1943.93 318.21 1943.51 318.814 1943.11C318.144 1944.5 317.39 1946.06 316.565 1947.77C315.785 1949.38 314.94 1951.13 314.039 1953C309.119 1963.21 302.61 1976.95 296.3 1991.83C289.996 2006.7 283.863 2022.77 279.712 2037.65C275.59 2052.42 273.302 2066.43 275.04 2076.99C276.354 2084.97 277.569 2091.3 278.536 2096.34C278.77 2097.56 278.99 2098.71 279.193 2099.78C280.256 2105.41 280.805 2108.84 280.751 2111.25C280.703 2113.36 280.203 2114.34 279.179 2115.31C277.851 2116.56 275.639 2117.76 271.624 2119.83C263.801 2123.87 256.717 2127.46 250.514 2129.17C244.34 2130.88 239.808 2130.52 236.42 2127.7C233.999 2125.68 231.475 2124.06 229.223 2122.68C228.673 2122.34 228.149 2122.02 227.649 2121.72C226.027 2120.74 224.662 2119.91 223.52 2119.08C221.992 2117.96 221.458 2117.23 221.305 2116.79C221.239 2116.6 221.072 2116.05 221.996 2114.66C224.362 2111.11 225.963 2107.08 226.966 2104.01C227.473 2102.46 227.838 2101.12 228.078 2100.17C228.198 2099.69 228.287 2099.3 228.347 2099.03C228.377 2098.9 228.4 2098.79 228.416 2098.71Z"
              stroke="white"
              stroke-width="6"
            />
          </g>
          <g id="Upper Limbal Hook Bone">
            <path
              id="Bone Border_9"
              d="M253.519 1536.7L253.525 1536.73L253.557 1536.92L253.683 1537.67C253.794 1538.33 253.957 1539.29 254.166 1540.51C254.583 1542.96 255.183 1546.46 255.913 1550.66C257.375 1559.05 259.36 1570.24 261.455 1581.43C263.549 1592.62 265.755 1603.83 267.657 1612.24C268.608 1616.44 269.487 1619.96 270.244 1622.45C270.62 1623.68 270.976 1624.69 271.307 1625.41C271.47 1625.77 271.649 1626.1 271.848 1626.36C271.948 1626.48 272.079 1626.63 272.246 1626.75C272.414 1626.87 272.672 1627 273 1627C273.628 1627 274.007 1626.54 274.154 1626.34C274.347 1626.08 274.513 1625.75 274.661 1625.39C274.961 1624.67 275.27 1623.66 275.587 1622.43C276.223 1619.94 276.926 1616.39 277.65 1612.1C279.1 1603.5 280.649 1591.84 281.932 1579.54C283.215 1567.25 284.233 1554.3 284.617 1543.14C284.999 1532.02 284.759 1522.54 283.472 1517.26C282.745 1514.29 282.112 1511.44 281.507 1508.73C281.067 1506.75 280.642 1504.84 280.208 1503C279.191 1498.69 278.143 1494.84 276.79 1491.78C275.44 1488.73 273.727 1486.31 271.291 1485.04C268.821 1483.75 265.823 1483.75 262.164 1485.06C254.865 1487.66 250.172 1493.01 247.766 1498.74C245.374 1504.43 245.199 1510.59 247.084 1514.9C248.45 1518.02 250.058 1523.45 251.335 1528.16C251.97 1530.5 252.519 1532.65 252.908 1534.21C253.103 1534.98 253.258 1535.62 253.364 1536.05C253.417 1536.27 253.458 1536.44 253.485 1536.56L253.517 1536.69L253.519 1536.7Z"
              fill="#E0CFBE"
              stroke="#857262"
              stroke-width="2"
            />
            <path
              id="Bone Dark Inner_9"
              d="M273 1626C269.5 1626 254.5 1536.5 254.5 1536.5C254.5 1536.5 250.8 1520.9 248 1514.5C244.5 1506.5 248.5 1491 262.5 1486C276.5 1481 277.5 1497 282.5 1517.5C287.5 1538 276.5 1626 273 1626Z"
              fill="#887E72"
            />
            <path
              id="Bone Grey Layer_9"
              d="M254.5 1536.5L260.417 1535.51L260.384 1535.31L260.338 1535.12L254.5 1536.5ZM254.5 1536.5C260.338 1535.12 260.338 1535.12 260.338 1535.11L260.338 1535.11L260.337 1535.11L260.335 1535.1L260.326 1535.06L260.292 1534.92C260.263 1534.8 260.221 1534.63 260.166 1534.4C260.057 1533.95 259.898 1533.3 259.699 1532.51C259.302 1530.92 258.741 1528.73 258.091 1526.33C256.829 1521.68 255.101 1515.76 253.497 1512.1C252.556 1509.94 252.382 1505.82 254.219 1501.45C255.968 1497.29 259.31 1493.51 264.518 1491.65C267.062 1490.74 267.89 1491.16 268.052 1491.25C268.422 1491.44 269.295 1492.14 270.387 1494.61C271.457 1497.03 272.385 1500.33 273.395 1504.6C273.776 1506.22 274.191 1508.08 274.632 1510.06C275.265 1512.89 275.952 1515.97 276.671 1518.92C277.698 1523.13 278.006 1531.68 277.621 1542.9C277.244 1553.85 276.242 1566.62 274.97 1578.81C274.161 1586.57 273.248 1594.04 272.325 1600.62C271.026 1594.29 269.661 1587.23 268.335 1580.15C266.248 1568.99 264.268 1557.83 262.81 1549.46C262.08 1545.27 261.482 1541.78 261.066 1539.34C260.858 1538.12 260.696 1537.16 260.586 1536.51L260.46 1535.76L260.428 1535.57L260.42 1535.52L260.418 1535.51L260.418 1535.51C260.418 1535.51 260.417 1535.51 254.5 1536.5Z"
              stroke="#E0CFBE"
              stroke-width="12"
            />
            <path
              id="Bone White Surface_9"
              d="M254.5 1536.5L257.459 1536L257.442 1535.91L257.419 1535.81L254.5 1536.5ZM254.5 1536.5C257.419 1535.81 257.419 1535.81 257.419 1535.81L257.419 1535.81L257.418 1535.8L257.416 1535.79L257.407 1535.76L257.375 1535.62C257.347 1535.51 257.305 1535.33 257.251 1535.11C257.143 1534.66 256.986 1534.02 256.789 1533.23C256.395 1531.66 255.839 1529.49 255.195 1527.11C253.927 1522.44 252.25 1516.73 250.748 1513.3C249.403 1510.22 249.378 1505.22 251.453 1500.29C253.484 1495.46 257.405 1491.01 263.509 1488.83C266.531 1487.75 268.289 1487.99 269.44 1488.59C270.695 1489.24 271.929 1490.68 273.131 1493.4C274.322 1496.09 275.302 1499.62 276.315 1503.92C276.718 1505.63 277.138 1507.51 277.579 1509.49C278.2 1512.27 278.863 1515.25 279.585 1518.21C280.724 1522.88 281.003 1531.83 280.619 1543C280.239 1554.04 279.23 1566.89 277.954 1579.13C276.677 1591.36 275.138 1602.94 273.706 1611.43C273.39 1613.3 273.082 1615.01 272.785 1616.54C272.398 1614.99 271.988 1613.25 271.559 1611.35C269.673 1603.02 267.478 1591.88 265.386 1580.7C263.296 1569.53 261.314 1558.35 259.854 1549.97C259.124 1545.78 258.525 1542.29 258.109 1539.84C257.901 1538.62 257.738 1537.66 257.627 1537.01L257.502 1536.26L257.469 1536.07L257.461 1536.02L257.459 1536.01L257.459 1536.01C257.459 1536 257.459 1536 254.5 1536.5Z"
              stroke="white"
              stroke-width="6"
            />
          </g>
          <g id="Tentola Majora" {...focusProps(Structure.TentolaMajora)}>
            <path
              id="Vector 7"
              d="M1491 1905L766.5 2239.5L752.5 2315.5C867.333 2319.83 1114.1 2331.5 1182.5 2343.5C1250.9 2355.5 1307 2397.83 1326.5 2417.5C1329.33 2415.67 1341.7 2401.4 1368.5 2359C1402 2306 1452 2220 1478 2144.5C1503.41 2070.72 1500.33 1955.33 1491 1905Z"
              fill="#E55F4D"
            />
            <path
              id="Vector 2"
              d="M816.5 1893.5C836.167 1915.33 912.5 2028 912.5 2028C912.5 2028 923.5 2042.35 923.5 2070C923.5 2097 822 2143.17 767 2163V2244C794.333 2241.5 879.8 2233.6 1003 2222C1157 2207.5 1456 2117 1493 1969.5C1522.6 1851.5 1450.2 1808.54 1367.5 1784C1290 1761 1012.07 1780.34 947 1795.5C895.5 1807.5 833.5 1859.17 816.5 1893.5Z"
              fill="#DF7264"
            />
            <path
              id="Vector 8_2"
              d="M816.5 1893.5C836.167 1915.33 912.5 2028 912.5 2028C912.5 2028 923.5 2042.35 923.5 2070C923.5 2097 822 2143.17 767 2163V2244C794.333 2241.5 1003 2222 1003 2222C1263 2053 940 1878.5 816.5 1893.5Z"
              fill="black"
              fill-opacity="0.1"
            />
            <path
              id="Vector 9_2"
              d="M816.5 1893.5C836.167 1915.33 912.5 2028 912.5 2028C912.5 2028 923.5 2042.35 923.5 2070C923.5 2097 822 2143.17 767 2163V2244C1053.07 2217.83 1056.98 2089.01 816.5 1893.5Z"
              fill="black"
              fill-opacity="0.1"
            />
            <path
              id="Vector 6"
              d="M816.655 1896.36C816.093 1896.85 815.337 1897.08 814.597 1896.96C807.821 1895.85 824.607 1877.94 826.408 1875.59C837.365 1861.34 848.547 1847.31 861.274 1834.59C901.451 1794.4 949.773 1777.65 1005.66 1772.64C1082.02 1765.8 1159.28 1764.66 1235.89 1766.05C1293.09 1767.08 1354.04 1768.18 1407.31 1791.88C1437.68 1805.4 1464.64 1827.92 1483.83 1855.09C1488.5 1861.7 1499.89 1877.25 1495.88 1886.46C1494.93 1888.64 1487.61 1867.77 1485.81 1864.94C1477.14 1851.34 1465.31 1839.55 1453.09 1829.14C1417.15 1798.55 1371.13 1786.74 1324.82 1783.63C1244.88 1778.28 1163.06 1786.06 1083.31 1791.42C1031.5 1794.89 974.537 1794.08 925.97 1814.99C884.695 1832.77 850.083 1867.16 816.655 1896.36Z"
              fill="#BC251A"
            />
          </g>
          <g id="Elastigon" {...focusProps(Structure.Elastigon)}>
            <path
              id="Elastigon Base"
              d="M1620.85 2251.37C1613.56 2249.4 1606.85 2247.59 1603.02 2246.52C1602.99 2245.44 1603 2244.03 1603.05 2242.29C1603.2 2237.29 1603.69 2230.11 1604.45 2221.41C1605.97 2204.02 1608.56 2180.84 1611.55 2157.38C1614.55 2133.92 1617.94 2110.25 1621.08 2091.87C1622.66 2082.68 1624.15 2074.87 1625.49 2069.11C1626.11 2066.46 1626.67 2064.31 1627.18 2062.68C1641.41 2065.53 1661.03 2069.68 1678.01 2073.79C1687.32 2076.04 1695.76 2078.25 1702.05 2080.21C1705.21 2081.19 1707.72 2082.07 1709.49 2082.83C1709.8 2082.96 1710.07 2083.08 1710.31 2083.19C1710.12 2084.6 1709.72 2086.61 1709.1 2089.19C1707.82 2094.57 1705.72 2101.99 1703.01 2110.81C1697.62 2128.43 1689.93 2151.34 1681.88 2174.02C1673.83 2196.69 1665.45 2219.07 1658.7 2235.62C1655.31 2243.91 1652.37 2250.65 1650.1 2255.21C1649.35 2256.73 1648.71 2257.93 1648.17 2258.84C1643.1 2257.4 1633.91 2254.91 1624.96 2252.49C1623.58 2252.11 1622.2 2251.74 1620.85 2251.37ZM1711.6 2083.9C1711.6 2083.9 1711.59 2083.89 1711.57 2083.87C1711.59 2083.89 1711.6 2083.9 1711.6 2083.9ZM1710.44 2081.69C1710.44 2081.69 1710.44 2081.69 1710.44 2081.69C1710.44 2081.68 1710.44 2081.69 1710.44 2081.69Z"
              fill="url(#pattern3)"
              stroke="#DDA778"
              stroke-width="10"
            />
            <g id="Elastigon Shell">
              <path
                id="Rectangle 29"
                d="M1715.43 1739.56C1731.06 1740.71 1739.57 1744.04 1743.36 1746.01C1744.56 1746.63 1745.12 1748.03 1744.77 1749.53L1666.1 2080.69C1665.59 2082.84 1663.44 2084.17 1661.29 2083.66L1636.81 2077.84C1634.96 2077.4 1633.73 2075.75 1633.89 2073.91C1634.53 2066.8 1636.61 2050.49 1643.21 2027.51C1643.37 2026.95 1643.64 2026.44 1644.02 2025.99C1653.16 2015.18 1660.97 1999.08 1667.81 1979.34C1674.64 1959.57 1680.52 1936.08 1685.72 1910.43C1695.67 1861.43 1703.2 1804.47 1710.33 1750.49C1710.66 1747.97 1710.99 1745.46 1711.33 1742.95C1711.6 1740.89 1713.39 1739.41 1715.43 1739.56Z"
                fill="#DF7264"
                stroke="#BC251A"
                stroke-width="2"
              />
              <path
                id="Rectangle 30"
                d="M1777.41 1754.27C1762.92 1748.27 1753.82 1747.42 1749.56 1747.47C1748.2 1747.48 1747.07 1748.49 1746.72 1749.98L1668.05 2081.14C1667.54 2083.29 1668.87 2085.45 1671.02 2085.96L1695.5 2091.77C1697.35 2092.21 1699.19 2091.29 1699.87 2089.58C1702.5 2082.93 1707.97 2067.43 1712.42 2043.94C1712.53 2043.37 1712.51 2042.79 1712.38 2042.21C1709.08 2028.46 1709.33 2010.56 1712.11 1989.85C1714.89 1969.12 1720.21 1945.5 1727.09 1920.25C1740.25 1872.01 1759.14 1817.75 1777.04 1766.33C1777.88 1763.93 1778.71 1761.53 1779.54 1759.14C1780.23 1757.18 1779.29 1755.05 1777.41 1754.27Z"
                fill="#DF7264"
                stroke="#BC251A"
                stroke-width="2"
              />
            </g>
            <g id="Spring">
              <rect
                id="Rectangle 1"
                x="1635.94"
                y="2064.15"
                width="67.4646"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1635.94 2064.15)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 2"
                x="1638.59"
                y="2052.99"
                width="67.4646"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1638.59 2052.99)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 3"
                x="1641.24"
                y="2041.83"
                width="67.4646"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1641.24 2041.83)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 4"
                x="1643.89"
                y="2030.67"
                width="67.4646"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1643.89 2030.67)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 5"
                x="1651.26"
                y="2020.64"
                width="57.7705"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1651.26 2020.64)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 6"
                x="1660.39"
                y="2011.02"
                width="44.4411"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1660.39 2011.02)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 7"
                x="1665.99"
                y="2000.56"
                width="38.3823"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1665.99 2000.56)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 8"
                x="1670.41"
                y="1989.83"
                width="34.747"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1670.41 1989.83)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 9"
                x="1674.24"
                y="1978.95"
                width="32.3235"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1674.24 1978.95)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 10"
                x="1676.89"
                y="1967.79"
                width="32.3235"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1676.89 1967.79)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 11"
                x="1679.54"
                y="1956.63"
                width="32.3235"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1679.54 1956.63)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 12"
                x="1682.19"
                y="1945.48"
                width="32.3235"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1682.19 1945.48)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 13"
                x="1684.84"
                y="1934.32"
                width="32.3235"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1684.84 1934.32)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 14"
                x="1687.49"
                y="1923.16"
                width="32.3235"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1687.49 1923.16)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 15"
                x="1688.96"
                y="1911.72"
                width="34.747"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1688.96 1911.72)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 16"
                x="1691.61"
                y="1900.57"
                width="34.747"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1691.61 1900.57)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 17"
                x="1692.49"
                y="1888.99"
                width="38.3823"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1692.49 1888.99)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 18"
                x="1695.14"
                y="1877.83"
                width="38.3823"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1695.14 1877.83)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 19"
                x="1696.61"
                y="1866.4"
                width="40.8058"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1696.61 1866.4)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 20"
                x="1697.5"
                y="1854.82"
                width="44.4411"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1697.5 1854.82)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 21"
                x="1700.15"
                y="1843.66"
                width="44.4411"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1700.15 1843.66)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 22"
                x="1701.62"
                y="1832.22"
                width="46.8647"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1701.62 1832.22)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 23"
                x="1704.27"
                y="1821.07"
                width="46.8647"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1704.27 1821.07)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 24"
                x="1705.74"
                y="1809.63"
                width="49.2882"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1705.74 1809.63)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 25"
                x="1707.21"
                y="1798.19"
                width="51.7117"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1707.21 1798.19)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 26"
                x="1709.86"
                y="1787.03"
                width="51.7117"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1709.86 1787.03)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 27"
                x="1712.51"
                y="1775.88"
                width="51.7117"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1712.51 1775.88)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
              <rect
                id="Rectangle 28"
                x="1715.16"
                y="1764.72"
                width="51.7117"
                height="10.4678"
                rx="4.5"
                transform="rotate(13.3623 1715.16 1764.72)"
                fill="#CFCAEF"
                stroke="#DF7264"
              />
            </g>
            <g id="Elastigon Head">
              <rect
                id="Bone Border_10"
                x="1715.55"
                y="1744.18"
                width="61.336"
                height="20.1032"
                rx="6"
                transform="rotate(13.3623 1715.55 1744.18)"
                fill="#E0CFBE"
                stroke="#857262"
                stroke-width="2"
              />
              <rect
                id="Bone Dark Inner_10"
                x="1716.29"
                y="1745.38"
                width="59.336"
                height="18.1032"
                rx="5"
                transform="rotate(13.3623 1716.29 1745.38)"
                fill="#887E72"
              />
              <g id="Bone Grey Layer_10">
                <mask id="path-212-inside-2_10_1969" fill="white">
                  <rect
                    x="1716.29"
                    y="1745.38"
                    width="59.336"
                    height="18.1032"
                    rx="5"
                    transform="rotate(13.3623 1716.29 1745.38)"
                  />
                </mask>
                <rect
                  x="1716.29"
                  y="1745.38"
                  width="59.336"
                  height="18.1032"
                  rx="5"
                  transform="rotate(13.3623 1716.29 1745.38)"
                  stroke="#E0CFBE"
                  stroke-width="18.1032"
                  mask="url(#path-212-inside-2_10_1969)"
                />
              </g>
              <g id="Bone White Surface_10">
                <mask id="path-213-inside-3_10_1969" fill="white">
                  <rect
                    x="1716.29"
                    y="1745.38"
                    width="59.336"
                    height="18.1032"
                    rx="5"
                    transform="rotate(13.3623 1716.29 1745.38)"
                  />
                </mask>
                <rect
                  x="1716.29"
                  y="1745.38"
                  width="59.336"
                  height="18.1032"
                  rx="5"
                  transform="rotate(13.3623 1716.29 1745.38)"
                  stroke="white"
                  stroke-width="12"
                  mask="url(#path-213-inside-3_10_1969)"
                />
              </g>
            </g>
          </g>
          <g id="Brain" {...focusProps(null)}>
            <path
              id="Brain Cavity"
              d="M1834 2274C1830 2331.5 1868 2344 1920 2369.5C1948.83 2376.83 2012.7 2390.8 2037.5 2388C2068.5 2384.5 2126.5 2365 2162 2354.5C2197.5 2344 2309.5 2252 2337.5 2217.5C2365.5 2183 2480.5 1935.5 2495 1907C2509.5 1878.5 2534 1742.5 2539 1722.5C2544 1702.5 2565.5 1531.5 2564 1483C2562.5 1434.5 2528.73 1310.58 2511 1291C2463 1238 2358 1184.5 2349 1177C2340 1169.5 2336.5 1149.5 2343 1140C2349.5 1130.5 2378.5 1125.5 2403.5 1100C2428.5 1074.5 2421 993.519 2421 967C2421 936 2465 747.5 2471.5 720C2478 692.5 2480.5 614.5 2467.5 579.5C2458.42 555.046 2373 480 2343 468C2313 456 2242.5 468 2218.5 511.5C2194.5 555 2202.5 647 2206 702C2209.5 757 2173.5 869 2166.5 922.5C2159.5 976 2170 1035 2189.5 1054.5C2209 1074 2241 1117.5 2233.5 1149.5C2226 1181.5 2140.5 1203 2094.5 1223.5C2048.5 1244 2002 1325.5 1980 1377C1958 1428.5 1946.5 1641 1946 1652C1945.5 1663 1894 1968.5 1891.5 1980.5C1889 1992.5 1838 2216.5 1834 2274Z"
              fill="#721D17"
              stroke="black"
            />
            <path
              id="Quantaxial Fibers"
              d="M1965 2515C1931.73 2411.5 1851.5 2398.5 1893 2334.5L2300 2241C2280.5 2293.17 2236.7 2422.6 2217.5 2523C2193.5 2648.5 2220 2864.5 2227 2948C2232.6 3014.8 2286.33 3179.33 2312.5 3267H2112C2106.5 3216 2091.7 3084.3 2082.5 2993.5C2071 2880 1987.5 2585 1965 2515Z"
              fill="#F9FAD0"
            />
            <g id="Brain Connector">
              <path
                id="Vector 110"
                d="M2256.5 1168.5C2258.5 1154.83 2262.5 1120.2 2262.5 1091L2326 1097L2322 1156.5L2320.5 1215.5L2245.5 1208L2256.5 1168.5Z"
                fill="#FFA6D1"
              />
              <path
                id="Vector 107"
                d="M2262.5 1099.5C2263.7 1138.7 2253.33 1182.5 2248 1199.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 108"
                d="M2293 1106C2285.4 1184.8 2283.5 1208.83 2283.5 1211"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 109"
                d="M2325 1107C2320.6 1151.4 2319.83 1194.17 2320 1210"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 111"
                d="M2256.5 1168.5C2258.5 1154.83 2262.5 1120.2 2262.5 1091L2326 1097L2322 1156.5L2320.5 1215.5L2245.5 1208L2256.5 1168.5Z"
                fill="#444444"
                fill-opacity="0.5"
              />
            </g>
            <g id="Lower Brain">
              <path
                id="Vector 103"
                d="M1906.5 2094.5C1885 2065 1909 2015.5 1954.5 1890C1958.67 1867.67 1968.7 1815.9 1975.5 1787.5C1984 1752 1997.5 1571 1999 1517.5C2000.5 1464 2123.5 1255.5 2138 1243C2152.5 1230.5 2229 1194.5 2260 1194C2291 1193.5 2346.5 1195 2387 1217.5C2427.5 1240 2492 1328 2505 1351.5C2518 1375 2535.5 1519.5 2532.5 1557.5C2529.5 1595.5 2485.5 1787.5 2472 1853.5C2458.5 1919.5 2299 2018.5 2268 2037.5C2237 2056.5 2151.5 2085.5 2082 2108C2012.5 2130.5 1928 2124 1906.5 2094.5Z"
                fill="#FFA6D1"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 79"
                d="M2143 1278.5C2151.5 1304 2111.5 1333.5 2117 1366L2153.5 1560C2137.17 1554 2102.2 1539 2093 1527C2081.5 1512 2020 1527 1998.5 1504.5C1977 1482 1983.5 1447 1985 1427.5C1986.5 1408 2027.5 1379 2036.5 1339.5C2045.5 1300 2089 1251.5 2104.5 1244.5C2120 1237.5 2134.5 1253 2143 1278.5Z"
                fill="#FFA6D1"
              />
              <path
                id="Vector 80"
                d="M2117 1366C2111.5 1333.5 2151.5 1304 2143 1278.5C2134.5 1253 2120 1237.5 2104.5 1244.5C2089 1251.5 2045.5 1300 2036.5 1339.5C2027.5 1379 1986.5 1408 1985 1427.5C1983.5 1447 1977 1482 1998.5 1504.5C2020 1527 2081.5 1512 2093 1527C2102.2 1539 2137.17 1554 2153.5 1560"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 81"
                d="M2132 1319C2157.5 1353 2166 1398.5 2166.5 1409.5C2166.9 1418.3 2160.33 1452.83 2157 1469"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 91"
                d="M1957.5 1713C1944.5 1741.5 1972 1795 1962.5 1853L2117.5 1722C2117.33 1716.5 2114.1 1701.8 2102.5 1687C2088 1668.5 2056.5 1660.5 2024 1658C1991.5 1655.5 1970.5 1684.5 1957.5 1713Z"
                fill="#FFA6D1"
              />
              <path
                id="Vector 104"
                d="M1962.5 1853C1972 1795 1944.5 1741.5 1957.5 1713C1970.5 1684.5 1991.5 1655.5 2024 1658C2056.5 1660.5 2088 1668.5 2102.5 1687C2114.1 1701.8 2117.33 1716.5 2117.5 1722"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 92"
                d="M2099 1682.5C2145 1663.5 2179 1641.5 2184.5 1630.5C2188.9 1621.7 2196.33 1597.17 2199.5 1586"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 93"
                d="M2291 1243C2284.6 1268.6 2270.33 1282 2264 1285.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 94"
                d="M2508 1333.5C2499.5 1306 2472.5 1290.5 2418 1292.5L2508 1410C2510.83 1393.67 2514.8 1355.5 2508 1333.5Z"
                fill="#FFA6D1"
              />
              <path
                id="Vector 106"
                d="M2418 1292.5C2472.5 1290.5 2499.5 1306 2508 1333.5C2514.8 1355.5 2510.83 1393.67 2508 1410"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 95"
                d="M2549 1498C2542 1451.5 2517 1429.5 2404 1374.5L2528 1588C2537.33 1573.5 2554.6 1535.2 2549 1498Z"
                fill="#FFA6D1"
              />
              <path
                id="Vector 105"
                d="M2404 1374.5C2517 1429.5 2542 1451.5 2549 1498C2554.6 1535.2 2537.33 1573.5 2528 1588"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 96"
                d="M2445.5 1395.5C2426.3 1403.5 2410.83 1412.17 2405.5 1415.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 97"
                d="M2482 1415.5C2454 1439.5 2439 1466.5 2436 1486.5C2433 1506.5 2416 1544.5 2431.5 1585C2443.9 1617.4 2456.33 1643.83 2461 1653"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 98"
                d="M2424.5 1549.5C2415.7 1569.5 2402.5 1586.83 2397 1593"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 82"
                d="M2092 1526.5C2125.2 1531.7 2158.17 1523.67 2170.5 1519"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 83"
                d="M2291 1198.5C2280.5 1266 2320 1288 2307.5 1337C2295 1386 2252 1408.5 2239 1474"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 84"
                d="M2263.5 1415.5C2279 1454 2282.5 1484 2263.5 1511.5C2244.5 1539 2240.5 1556.5 2245.5 1577.5C2249.5 1594.3 2263.5 1615.17 2270 1623.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 85"
                d="M2256.5 1604C2238 1637.5 2236.5 1644 2234.5 1657.5C2232.5 1671 2234.74 1695.48 2231.5 1706C2227.5 1719 2214 1742 2187 1766"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 87"
                d="M2199.5 1754.5C2203 1785.5 2195 1798 2179 1809.5C2163 1821 2131 1829.5 2127.5 1836.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 88"
                d="M2144.5 1826.5C2125 1809.5 2112 1808.5 2101.5 1812C2091 1815.5 2077.5 1826 2070 1839.5C2062.5 1853 2048.5 1873.5 2038.5 1880C2030.5 1885.2 2014.17 1893.5 2007 1897"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 89"
                d="M1990.5 1961C2001.5 1955.5 2019.5 1936.5 2033.5 1920.5L1987.5 2122.5C1977.67 2124.67 1955.5 2129.1 1945.5 2129.5C1933 2130 1912 2120 1895 2099.5C1878 2079 1885.5 2046 1889 2023C1892.5 2000 1935.5 1983 1942 1977.5C1948.5 1972 1979.5 1966.5 1990.5 1961Z"
                fill="#FFA6D1"
              />
              <path
                id="Vector 90"
                d="M2051 1868C2054 1890.5 2047.5 1904.5 2033.5 1920.5C2019.5 1936.5 2001.5 1955.5 1990.5 1961C1979.5 1966.5 1948.5 1972 1942 1977.5C1935.5 1983 1892.5 2000 1889 2023C1885.5 2046 1878 2079 1895 2099.5C1912 2120 1933 2130 1945.5 2129.5C1955.5 2129.1 1977.67 2124.67 1987.5 2122.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 86"
                d="M2222.5 1723.5C2257.5 1771 2254 1780 2249 1814.5C2244 1849 2222.5 1876 2228.5 1899C2234.5 1922 2246.5 1939.5 2261 1948.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g id="Lower Brain Structures">
              <path
                id="Vector 112"
                d="M1875 2304.5C1875 2287 1884 2260 1910 2227.5L2245.5 2191L2308.5 2227.5L2290 2251.5C2264.67 2275 2206 2327.4 2174 2349C2134.31 2375.79 2058.7 2389.29 2030.17 2394.38L2029.5 2394.5C2001.5 2399.5 1927 2381.5 1902.5 2367.5C1878 2353.5 1875 2322 1875 2304.5Z"
                fill="#D10A69"
              />
              <path
                id="Vector 102"
                d="M1898.5 2240.5C1899 2196.5 1924 2176.5 1982.5 2134.5L2009.5 2243.5L2002.5 2351.5C1987.67 2351.33 1953.1 2347.3 1933.5 2332.5C1909 2314 1898 2284.5 1898.5 2240.5Z"
                fill="#D10A69"
              />
              <path
                id="Vector 99"
                d="M1989 2201.5C1999.5 2234.5 2008.5 2245.5 2002.5 2321C2002.5 2321 1998.57 2340.26 2002.5 2351.5C2009.5 2371.5 2088.42 2353.44 2139.5 2336.5C2210.88 2312.83 2296.5 2225 2296.5 2225L2285.5 2137.5C2271.33 2137.67 2241 2137.9 2233 2137.5C2223 2137 2186 2124 2176.5 2117C2167 2110 2139 2065.5 2108.5 2058.5C2078 2051.5 2033.5 2067.5 2004 2094.5C1974.5 2121.5 1978.5 2168.5 1989 2201.5Z"
                fill="#EFB2F4"
              />
              <path
                id="Vector 100"
                d="M2270 2145C2263 2173.5 2273.5 2199.5 2301.5 2236C2311.67 2224.67 2334.5 2197.9 2344.5 2181.5C2354.5 2165.1 2366 2121 2370.5 2101C2354.67 2097.33 2321.3 2090.8 2314.5 2094C2306 2098 2277 2116.5 2270 2145Z"
                fill="#46355B"
              />
              <path
                id="Vector 113"
                d="M2306 1873.5C2266.5 1887.5 2261 1918 2273.5 2005.5L2450 1902C2455.83 1897.83 2469.8 1886.3 2479 1873.5C2490.5 1857.5 2512 1808.5 2520 1784.5C2528 1760.5 2511.5 1731.5 2495 1714C2478.5 1696.5 2433 1699 2405.5 1709C2378 1719 2375.5 1775.5 2373 1808.5C2370.5 1841.5 2345.5 1859.5 2306 1873.5Z"
                fill="#EFB2F4"
              />
              <path
                id="Vector 101"
                d="M2283.5 2071.5C2290 2086.5 2302 2093.5 2369.5 2106.5C2380.5 2087 2412.9 2035.3 2422.5 2014.5C2432.1 1993.7 2448.17 1921.83 2455 1888.5C2442.67 1883.67 2415.7 1873.7 2406.5 1872.5C2395 1871 2383 1884 2370.5 1899C2358 1914 2324.5 1924 2315.5 1927.5C2306.5 1931 2283.5 1962.5 2276.5 1986C2269.5 2009.5 2277 2056.5 2283.5 2071.5Z"
                fill="#FFC8CE"
              />
            </g>
            <g id="Upper Brain">
              <path
                id="Vector 33"
                d="M2220.5 586.5C2213.5 619.5 2232.5 659 2230 719V760C2230 777.5 2206.5 870 2197.5 897.5C2188.5 925 2187.5 963.5 2191.5 996C2195.5 1028.5 2219 1058 2230 1075.5C2241 1093 2281 1113.5 2314.5 1114C2348 1114.5 2357 1105 2374 1090C2391 1075 2395.5 1030.5 2393 1003C2390.5 975.5 2437 736.5 2445 701C2453 665.5 2419.5 573 2400 544.5C2380.5 516 2327 493.5 2315.5 492.5C2304 491.5 2277 502.5 2253.5 520C2230 537.5 2227.5 553.5 2220.5 586.5Z"
                fill="#FFA6D1"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 26"
                d="M2272.5 502C2257 517 2258.5 562.5 2272.5 611L2359 589.5C2359.5 592 2360.9 599.8 2362.5 611C2364.5 625 2374.5 638.5 2391 648C2407.5 657.5 2435.5 668 2463 638.5C2479.05 621.282 2443.12 570.917 2404 534.5C2376.09 508.521 2347.15 489.836 2335 486.5C2309.5 479.5 2288 487 2272.5 502Z"
                fill="url(#paint0_linear_10_1969)"
              />
              <path
                id="Vector 27"
                d="M2272.5 611C2258.5 562.5 2257 517 2272.5 502C2288 487 2309.5 479.5 2335 486.5C2347.15 489.836 2376.09 508.521 2404 534.5C2443.12 570.917 2479.05 621.282 2463 638.5C2435.5 668 2407.5 657.5 2391 648C2374.5 638.5 2364.5 625 2362.5 611C2360.9 599.8 2359.5 592 2359 589.5M2272.5 611C2276.17 625.833 2282.4 657.9 2278 667.5M2272.5 611C2282.33 621.333 2305.4 642.1 2319 642.5M2359 589.5C2358.83 585.667 2359.3 577 2362.5 573C2365.7 569 2367.83 560 2368.5 556M2359 589.5C2356.83 585.167 2351.3 575.8 2346.5 573C2341.7 570.2 2338.17 560.5 2337 556"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 28"
                d="M2230.5 775.5C2253 756.5 2273 756 2306.5 762.5L2287.5 849C2287.67 852.333 2286.1 861.5 2278.5 871.5C2269 884 2241.5 886.5 2226 885.5C2210.5 884.5 2197.5 875 2196.5 847C2195.5 819 2208 794.5 2230.5 775.5Z"
                fill="url(#paint1_linear_10_1969)"
              />
              <path
                id="Vector 29"
                d="M2306.5 762.5C2273 756 2253 756.5 2230.5 775.5C2208 794.5 2195.5 819 2196.5 847C2197.5 875 2210.5 884.5 2226 885.5C2241.5 886.5 2269 884 2278.5 871.5C2286.1 861.5 2287.67 852.333 2287.5 849M2306.5 762.5C2316 764.343 2339.8 763.6 2345 758C2350.2 752.4 2358.83 737.667 2362.5 731M2306.5 762.5C2310 759.5 2317.68 752.492 2321 749.5C2326 745 2329.33 736.5 2332 731M2287.5 849C2289.83 844.5 2295.1 834.7 2297.5 831.5C2299.9 828.3 2304.5 818.5 2306.5 814M2287.5 849C2285.17 844.833 2280.1 835.5 2278.5 831.5C2276.9 827.5 2274.83 818.167 2274 814"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 30"
                d="M2370.5 860.5C2347 855.5 2335 876 2306 929.5L2393 983C2408.5 965 2414 941.5 2413 913C2412 884.5 2394 865.5 2370.5 860.5Z"
                fill="#FFA6D1"
              />
              <path
                id="Vector 31"
                d="M2306 929.5C2335 876 2347 855.5 2370.5 860.5C2394 865.5 2412 884.5 2413 913C2414 941.5 2408.5 965 2393 983M2306 929.5C2300 938.667 2283.9 958.6 2267.5 965M2306 929.5C2303.67 936.667 2300.4 953.3 2306 962.5"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 32"
                d="M2381.5 1079C2350 1045 2329 1046.5 2312.5 1049C2307.65 1049.73 2302.94 1050.56 2298.5 1051.27M2258 1043.5C2260.67 1045.33 2267.5 1049.6 2273.5 1052C2278.8 1054.12 2287.83 1053 2298.5 1051.27M2298.5 1051.27C2294 1047.68 2284.7 1039.8 2283.5 1037C2282.3 1034.2 2279.67 1030.5 2278.5 1029"
                stroke="#FF66AF"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <g id="Photophone" {...focusProps(Structure.Photophone)}>
            <path
              id="Outer Flap"
              d="M582.5 725.5C590 704 603 657.5 603.5 613.5L615.5 601L644.5 622L589 825.5C584.5 824.167 578.4 822.4 574 820C568.5 817 562.5 807.5 560.5 799.5C558.5 791.5 575 747 582.5 725.5Z"
              fill="#91D9F8"
            />
            <g id="Eye">
              <path
                id="Vector 117"
                d="M723.5 438.5C702.5 438 689 449 643 501.5L854.5 547C854.5 536.167 852.5 514.1 844.5 512.5C834.5 510.5 811.5 491.5 798.5 474C785.5 456.5 744.5 439 723.5 438.5Z"
                fill="#D4BEC9"
              />
              <path
                id="Vector 118"
                d="M844.5 512.5C834.5 510.5 811.5 491.5 798.5 474C785.5 456.5 744.5 439 723.5 438.5C713.048 438.251 704.453 440.851 692.784 450"
                stroke="#BDA8B3"
                stroke-width="4"
                stroke-linecap="round"
              />
              <g id="Union">
                <mask id="path-262-inside-4_10_1969" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M708.26 680C764.593 680 810.26 634.333 810.26 578C810.26 521.667 764.593 476 708.26 476C674.114 476 643.887 492.779 625.374 518.541C623.1 515.981 620.469 514.395 617.55 514.011C604.919 512.348 591.676 533.818 587.97 561.966C584.265 590.114 591.499 614.28 604.13 615.943C606.989 616.32 609.88 615.51 612.685 613.706C627.158 652.429 664.489 680 708.26 680Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M708.26 680C764.593 680 810.26 634.333 810.26 578C810.26 521.667 764.593 476 708.26 476C674.114 476 643.887 492.779 625.374 518.541C623.1 515.981 620.469 514.395 617.55 514.011C604.919 512.348 591.676 533.818 587.97 561.966C584.265 590.114 591.499 614.28 604.13 615.943C606.989 616.32 609.88 615.51 612.685 613.706C627.158 652.429 664.489 680 708.26 680Z"
                  fill="#C9E3EE"
                />
                <path
                  d="M625.374 518.541L622.384 521.198L625.704 524.935L628.622 520.875L625.374 518.541ZM617.55 514.011L617.027 517.977L617.027 517.977L617.55 514.011ZM587.97 561.966L584.005 561.444L584.005 561.444L587.97 561.966ZM604.13 615.943L604.652 611.978L604.652 611.978L604.13 615.943ZM612.685 613.706L616.432 612.306L614.694 607.658L610.521 610.342L612.685 613.706ZM806.26 578C806.26 632.124 762.384 676 708.26 676V684C766.803 684 814.26 636.542 814.26 578H806.26ZM708.26 480C762.384 480 806.26 523.876 806.26 578H814.26C814.26 519.458 766.803 472 708.26 472V480ZM628.622 520.875C646.416 496.114 675.457 480 708.26 480V472C672.772 472 641.358 489.444 622.125 516.207L628.622 520.875ZM617.027 517.977C618.771 518.206 620.581 519.17 622.384 521.198L628.364 515.884C625.618 512.793 622.166 510.584 618.072 510.045L617.027 517.977ZM591.936 562.488C593.733 548.841 597.824 537.005 602.818 528.909C608.029 520.46 613.251 517.479 617.027 517.977L618.072 510.045C609.218 508.879 601.503 515.803 596.009 524.71C590.296 533.971 585.914 546.944 584.005 561.444L591.936 562.488ZM604.652 611.978C600.875 611.48 596.603 607.25 593.756 597.739C591.028 588.628 590.139 576.136 591.936 562.488L584.005 561.444C582.095 575.945 582.971 589.61 586.092 600.034C589.093 610.059 594.754 618.743 603.608 619.909L604.652 611.978ZM610.521 610.342C608.312 611.763 606.362 612.203 604.652 611.978L603.608 619.909C607.617 620.437 611.448 619.258 614.849 617.071L610.521 610.342ZM708.26 676C666.212 676 630.339 649.516 616.432 612.306L608.938 615.107C623.976 655.342 662.767 684 708.26 684V676Z"
                  fill="#91D9F8"
                  mask="url(#path-262-inside-4_10_1969)"
                />
              </g>
              <path
                id="Subtract_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M638.68 626.03C656.618 592.652 665.959 554.106 663.895 513.501C663.792 511.471 663.661 509.45 663.503 507.436C675.411 499.868 689.381 495.184 704.479 494.416C751.087 492.047 790.79 527.91 793.159 574.518C795.528 621.126 759.666 660.829 713.058 663.198C682.383 664.757 654.698 649.756 638.68 626.03Z"
                fill="url(#paint2_radial_10_1969)"
              />
            </g>
            <g id="Phone Structures">
              <path
                id="Vector 123"
                d="M822 739C819.5 739 815 741 812.5 748L796.5 799.5C808 804.5 818.909 802.982 820 803.093C823.188 803.415 828.01 801.735 829.5 799.5C831.5 796.5 832 748 831 745.5C830 743 824.5 739 822 739Z"
                fill="#82C3DF"
                stroke="#6FACC6"
                stroke-width="3"
              />
              <path
                id="Vector 124"
                d="M816 757L815.004 756.909L815.004 756.909L816 757ZM819 746.5L818.445 745.668L819 746.5ZM820 796.5L820.858 795.986L820 796.5ZM820.5 752L820.641 752.99L820.5 752ZM822.004 793.915C821.957 794.465 822.365 794.949 822.915 794.996C823.465 795.043 823.949 794.635 823.996 794.085L822.004 793.915ZM824 754L824.995 753.895L824 754ZM813.442 748.336C815.829 741.651 820.004 740 822 740V738C818.996 738 814.171 740.349 811.558 747.664L813.442 748.336ZM822 740C822.403 740 823.054 740.175 823.896 740.569C824.711 740.952 825.61 741.495 826.476 742.122C827.342 742.749 828.154 743.445 828.801 744.121C829.463 744.813 829.892 745.422 830.072 745.871L831.929 745.129C831.608 744.328 830.974 743.5 830.246 742.738C829.502 741.961 828.596 741.188 827.649 740.503C826.703 739.817 825.696 739.205 824.745 738.759C823.821 738.325 822.847 738 822 738V740ZM830.072 745.871C830.062 745.847 830.078 745.883 830.104 746.035C830.127 746.17 830.151 746.353 830.175 746.588C830.223 747.056 830.267 747.687 830.306 748.465C830.383 750.018 830.438 752.116 830.469 754.583C830.531 759.515 830.5 765.895 830.375 772.293C830.25 778.692 830.032 785.098 829.721 790.086C829.565 792.582 829.387 794.709 829.188 796.296C829.088 797.092 828.985 797.735 828.88 798.214C828.828 798.454 828.779 798.639 828.734 798.774C828.685 798.921 828.658 798.961 828.668 798.945L830.332 800.055C830.574 799.691 830.723 799.151 830.835 798.639C830.957 798.077 831.069 797.368 831.172 796.545C831.379 794.897 831.56 792.723 831.717 790.211C832.031 785.183 832.25 778.745 832.375 772.332C832.5 765.917 832.531 759.516 832.469 754.558C832.437 752.08 832.383 749.954 832.304 748.365C832.264 747.572 832.218 746.902 832.165 746.383C832.117 745.918 832.052 745.438 831.929 745.129L830.072 745.871ZM828.668 798.945C828.296 799.503 827.581 800.095 826.59 800.627C825.615 801.15 824.451 801.573 823.281 801.837C822.105 802.101 820.97 802.194 820.047 802.092C819.096 801.987 818.539 801.698 818.281 801.375L816.719 802.625C817.461 803.552 818.654 803.95 819.828 804.08C821.03 804.212 822.395 804.086 823.72 803.788C825.049 803.489 826.385 803.006 827.536 802.389C828.669 801.78 829.704 800.997 830.332 800.055L828.668 798.945ZM818.281 801.375C818.297 801.396 818.222 801.286 818.114 800.884C818.018 800.525 817.922 800.038 817.83 799.425C817.645 798.202 817.485 796.561 817.349 794.618C817.078 790.737 816.906 785.725 816.812 780.607C816.625 770.348 816.752 759.777 816.996 757.091L815.004 756.909C814.748 759.723 814.625 770.402 814.813 780.643C814.907 785.775 815.079 790.826 815.354 794.757C815.491 796.721 815.656 798.423 815.852 799.723C815.95 800.372 816.059 800.941 816.182 801.402C816.294 801.819 816.453 802.292 816.719 802.625L818.281 801.375ZM816.996 757.091C817.094 756.009 817.145 754.913 817.208 753.909C817.273 752.887 817.352 751.942 817.505 751.079C817.811 749.353 818.384 748.113 819.555 747.332L818.445 745.668C816.616 746.887 815.883 748.77 815.535 750.73C815.362 751.71 815.277 752.749 815.212 753.783C815.146 754.834 815.099 755.864 815.004 756.909L816.996 757.091ZM819.555 747.332C820.464 746.726 821.852 746.661 823.297 747.183C824.727 747.7 825.992 748.721 826.606 749.947L828.394 749.053C827.508 747.279 825.788 745.957 823.976 745.302C822.178 744.652 820.066 744.587 818.445 745.668L819.555 747.332ZM826.606 749.947C826.566 749.867 826.572 749.841 826.595 749.965C826.613 750.061 826.633 750.202 826.652 750.392C826.691 750.772 826.726 751.296 826.754 751.953C826.81 753.265 826.841 755.057 826.846 757.179C826.857 761.421 826.767 766.947 826.586 772.513C826.405 778.081 826.135 783.678 825.785 788.063C825.61 790.257 825.417 792.134 825.208 793.546C825.103 794.253 824.996 794.827 824.891 795.26C824.838 795.475 824.788 795.643 824.743 795.768C824.695 795.901 824.666 795.948 824.668 795.945L826.332 797.055C826.563 796.708 826.716 796.214 826.833 795.735C826.96 795.219 827.077 794.577 827.186 793.839C827.405 792.362 827.603 790.434 827.779 788.222C828.132 783.793 828.404 778.162 828.585 772.578C828.766 766.993 828.857 761.444 828.846 757.174C828.841 755.041 828.81 753.218 828.752 751.867C828.723 751.193 828.687 750.624 828.642 750.187C828.619 749.969 828.593 749.771 828.562 749.602C828.536 749.461 828.49 749.245 828.394 749.053L826.606 749.947ZM824.668 795.945C823.732 797.349 823.02 797.591 822.629 797.565C822.197 797.536 821.559 797.154 820.858 795.986L819.143 797.014C819.941 798.346 821.053 799.464 822.496 799.56C823.98 799.659 825.268 798.651 826.332 797.055L824.668 795.945ZM820.858 795.986C820.858 795.986 820.788 795.828 820.691 795.374C820.604 794.965 820.515 794.417 820.426 793.74C820.249 792.388 820.081 790.579 819.932 788.462C819.635 784.231 819.418 778.815 819.359 773.462C819.299 768.104 819.397 762.834 819.725 758.885C819.889 756.904 820.108 755.297 820.381 754.189C820.519 753.629 820.658 753.254 820.778 753.034C820.926 752.763 820.917 752.951 820.641 752.99L820.359 751.01C819.646 751.112 819.238 751.682 819.023 752.074C818.781 752.517 818.594 753.085 818.439 753.711C818.128 754.975 817.899 756.707 817.732 758.72C817.396 762.76 817.299 768.101 817.359 773.484C817.419 778.871 817.637 784.326 817.937 788.602C818.087 790.738 818.259 792.592 818.443 794C818.535 794.702 818.632 795.309 818.735 795.79C818.827 796.225 818.95 796.693 819.143 797.014L820.858 795.986ZM820.641 752.99C820.91 752.952 821.565 752.951 822.134 753.151C822.668 753.339 822.955 753.623 823.006 754.105L824.995 753.895C824.834 752.377 823.765 751.605 822.798 751.265C821.867 750.937 820.878 750.936 820.359 751.01L820.641 752.99ZM823.006 754.105C823.928 762.831 822.843 784.084 822.004 793.915L823.996 794.085C824.834 784.273 825.94 762.837 824.995 753.895L823.006 754.105Z"
                fill="#6FACC6"
              />
              <path
                id="Vector 122"
                d="M799.5 813C804 811.5 811.5 786 811.5 758C808.667 757.167 802.3 755.4 799.5 755C796.7 754.6 787.667 756.833 783.5 758L778.5 815C784 814.833 795.9 814.2 799.5 813Z"
                fill="#6FACC6"
              />
              <path
                id="Vector 121"
                d="M813 743C809.5 734 798 736 786.5 747L788 784C793.333 782 805.1 776.3 809.5 769.5C815 761 816.5 752 813 743Z"
                fill="#BCA8B3"
              />
              <path
                id="Vector 120"
                d="M658 740C636 739 630.5 729.5 619 715L603 773.5C605.333 772.5 612.1 769.8 622.5 767C635.5 763.5 661.5 771 672.5 773.5C683.5 776 695 796 702.5 805.5C710 815 730.5 816 738 819.5C745.5 823 778.5 820.5 783.5 816C788.5 811.5 795.5 756.5 795.5 751.5C795.5 746.5 780.5 740 773 744C765.5 748 729.5 745.5 718 744C706.5 742.5 680 741 658 740Z"
                fill="#82C3DF"
              />
            </g>
          </g>
          <g id="Auroracrista" {...focusProps(Structure.Auroracrista)}>
            <path
              id="Vector 147"
              d="M922.634 221.656L963.134 199.549L1002.61 223.431L961.426 276.53L922.634 221.656Z"
              fill="#FF7373"
            />
            <path
              id="Vector 165"
              d="M842.654 219.882L883.154 197.774L922.634 221.656L881.446 274.756L842.654 219.882Z"
              fill="#FF7373"
            />
            <path
              id="Vector 149"
              d="M922.634 221.656L883.154 197.775L963.134 199.549L922.634 221.656Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 150"
              d="M961.426 276.53L922.634 221.656L921.37 278.642L961.426 276.53Z"
              fill="url(#paint3_linear_10_1969)"
            />
            <path
              id="Vector 156"
              d="M922.634 221.656L881.446 274.756L921.37 278.642L922.634 221.656Z"
              fill="url(#paint4_linear_10_1969)"
            />
            <path
              id="Vector 241"
              d="M842.654 219.882L801.466 272.981L841.389 276.868L842.654 219.882Z"
              fill="url(#paint5_linear_10_1969)"
            />
            <path
              id="Vector 160"
              d="M1041.41 278.305L1002.61 223.431L1001.35 280.417L1041.41 278.305Z"
              fill="url(#paint6_linear_10_1969)"
            />
            <path
              id="Vector 161"
              d="M1002.61 223.431L961.426 276.53L1001.35 280.417L1002.61 223.431Z"
              fill="url(#paint7_linear_10_1969)"
            />
            <path
              id="Vector 151"
              d="M1002.61 223.431L963.134 199.549L1043.11 201.324L1002.61 223.431Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 153"
              d="M961.426 276.53L921.37 278.642L961.293 282.529L1001.35 280.417L961.426 276.53Z"
              fill="#FE9292"
            />
            <path
              id="Vector 164"
              d="M961.426 276.53L921.37 278.642L961.293 282.529L1001.35 280.417L961.426 276.53Z"
              fill="#FE9292"
            />
            <path
              id="Vector 157"
              d="M881.446 274.756L841.389 276.868L881.313 280.754L921.37 278.642L881.446 274.756Z"
              fill="#FE9292"
            />
            <path
              id="Vector 158"
              d="M961.293 282.529L921.37 278.642L920.97 296.638L961.293 282.529Z"
              fill="url(#paint8_linear_10_1969)"
            />
            <path
              id="Vector 239"
              d="M881.446 274.756L842.654 219.882L841.389 276.868L881.446 274.756Z"
              fill="url(#paint9_linear_10_1969)"
            />
            <path
              id="Vector 240"
              d="M881.313 280.754L841.389 276.868L840.99 294.863L881.313 280.754Z"
              fill="url(#paint10_linear_10_1969)"
            />
            <path
              id="Vector 159"
              d="M921.37 278.642L881.313 280.754L920.97 296.638L921.37 278.642Z"
              fill="url(#paint11_linear_10_1969)"
            />
            <path
              id="Vector 162"
              d="M1041.27 284.303L1001.35 280.417L1000.95 298.412L1041.27 284.303Z"
              fill="url(#paint12_linear_10_1969)"
            />
            <path
              id="Vector 163"
              d="M1001.35 280.417L961.293 282.529L1000.95 298.412L1001.35 280.417Z"
              fill="url(#paint13_linear_10_1969)"
            />
            <path
              id="Vector 166"
              d="M1082.59 225.205L1123.1 203.098L1162.58 226.98L1121.39 280.079L1082.59 225.205Z"
              fill="#FF7373"
            />
            <path
              id="Vector 167"
              d="M1002.61 223.431L1043.11 201.324L1082.59 225.205L1041.41 278.305L1002.61 223.431Z"
              fill="#FF7373"
            />
            <path
              id="Vector 168"
              d="M1082.59 225.205L1043.11 201.324L1123.1 203.098L1082.59 225.205Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 169"
              d="M1121.39 280.079L1082.59 225.205L1081.33 282.191L1121.39 280.079Z"
              fill="url(#paint14_linear_10_1969)"
            />
            <path
              id="Vector 170"
              d="M1082.59 225.205L1041.41 278.305L1081.33 282.191L1082.59 225.205Z"
              fill="url(#paint15_linear_10_1969)"
            />
            <path
              id="Vector 171"
              d="M1201.37 281.854L1162.58 226.98L1161.31 283.966L1201.37 281.854Z"
              fill="url(#paint16_linear_10_1969)"
            />
            <path
              id="Vector 172"
              d="M1162.58 226.98L1121.39 280.079L1161.31 283.966L1162.58 226.98Z"
              fill="url(#paint17_linear_10_1969)"
            />
            <path
              id="Vector 173"
              d="M1162.58 226.98L1123.1 203.098L1203.08 204.873L1162.58 226.98Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 174"
              d="M1121.39 280.079L1081.33 282.191L1121.25 286.078L1161.31 283.966L1121.39 280.079Z"
              fill="#FE9292"
            />
            <path
              id="Vector 175"
              d="M1121.39 280.079L1081.33 282.191L1121.25 286.078L1161.31 283.966L1121.39 280.079Z"
              fill="#FE9292"
            />
            <path
              id="Vector 176"
              d="M1041.41 278.305L1001.35 280.417L1041.27 284.303L1081.33 282.191L1041.41 278.305Z"
              fill="#FE9292"
            />
            <path
              id="Vector 177"
              d="M1121.25 286.078L1081.33 282.191L1080.93 300.187L1121.25 286.078Z"
              fill="url(#paint18_linear_10_1969)"
            />
            <path
              id="Vector 178"
              d="M1081.33 282.191L1041.27 284.303L1080.93 300.187L1081.33 282.191Z"
              fill="url(#paint19_linear_10_1969)"
            />
            <path
              id="Vector 179"
              d="M1201.23 287.852L1161.31 283.966L1160.91 301.962L1201.23 287.852Z"
              fill="url(#paint20_linear_10_1969)"
            />
            <path
              id="Vector 180"
              d="M1161.31 283.966L1121.25 286.078L1160.91 301.961L1161.31 283.966Z"
              fill="url(#paint21_linear_10_1969)"
            />
            <path
              id="Vector 181"
              d="M1242.56 228.755L1283.06 206.648L1322.54 230.529L1281.35 283.629L1242.56 228.755Z"
              fill="#FF7373"
            />
            <path
              id="Vector 182"
              d="M1162.58 226.98L1203.08 204.873L1242.56 228.755L1201.37 281.854L1162.58 226.98Z"
              fill="#FF7373"
            />
            <path
              id="Vector 183"
              d="M1242.56 228.754L1203.08 204.873L1283.06 206.647L1242.56 228.754Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 184"
              d="M1281.35 283.629L1242.56 228.755L1241.29 285.741L1281.35 283.629Z"
              fill="url(#paint22_linear_10_1969)"
            />
            <path
              id="Vector 185"
              d="M1242.56 228.754L1201.37 281.854L1241.29 285.74L1242.56 228.754Z"
              fill="url(#paint23_linear_10_1969)"
            />
            <path
              id="Vector 186"
              d="M1361.33 285.403L1322.54 230.529L1321.27 287.515L1361.33 285.403Z"
              fill="url(#paint24_linear_10_1969)"
            />
            <path
              id="Vector 187"
              d="M1322.54 230.529L1281.35 283.629L1321.27 287.515L1322.54 230.529Z"
              fill="url(#paint25_linear_10_1969)"
            />
            <path
              id="Vector 188"
              d="M1322.54 230.529L1283.06 206.647L1363.04 208.422L1322.54 230.529Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 189"
              d="M1281.35 283.629L1241.29 285.74L1281.21 289.627L1321.27 287.515L1281.35 283.629Z"
              fill="#FE9292"
            />
            <path
              id="Vector 190"
              d="M1281.35 283.629L1241.29 285.74L1281.21 289.627L1321.27 287.515L1281.35 283.629Z"
              fill="#FE9292"
            />
            <path
              id="Vector 191"
              d="M1201.37 281.854L1161.31 283.966L1201.23 287.852L1241.29 285.741L1201.37 281.854Z"
              fill="#FE9292"
            />
            <path
              id="Vector 192"
              d="M1281.21 289.627L1241.29 285.74L1240.89 303.736L1281.21 289.627Z"
              fill="url(#paint26_linear_10_1969)"
            />
            <path
              id="Vector 193"
              d="M1241.29 285.74L1201.23 287.852L1240.89 303.736L1241.29 285.74Z"
              fill="url(#paint27_linear_10_1969)"
            />
            <path
              id="Vector 194"
              d="M1361.19 291.402L1321.27 287.515L1320.87 305.511L1361.19 291.402Z"
              fill="url(#paint28_linear_10_1969)"
            />
            <path
              id="Vector 195"
              d="M1321.27 287.515L1281.21 289.627L1320.87 305.511L1321.27 287.515Z"
              fill="url(#paint29_linear_10_1969)"
            />
            <path
              id="Vector 196"
              d="M1402.52 232.304L1443.02 210.197L1482.5 234.078L1441.31 287.178L1402.52 232.304Z"
              fill="#FF7373"
            />
            <path
              id="Vector 197"
              d="M1322.54 230.529L1363.04 208.422L1402.52 232.304L1361.33 285.403L1322.54 230.529Z"
              fill="#FF7373"
            />
            <path
              id="Vector 198"
              d="M1402.52 232.304L1363.04 208.422L1443.02 210.197L1402.52 232.304Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 199"
              d="M1441.31 287.178L1402.52 232.304L1401.25 289.29L1441.31 287.178Z"
              fill="url(#paint30_linear_10_1969)"
            />
            <path
              id="Vector 200"
              d="M1402.52 232.304L1361.33 285.403L1401.25 289.29L1402.52 232.304Z"
              fill="url(#paint31_linear_10_1969)"
            />
            <path
              id="Vector 201"
              d="M1521.29 288.952L1482.5 234.078L1481.23 291.064L1521.29 288.952Z"
              fill="url(#paint32_linear_10_1969)"
            />
            <path
              id="Vector 202"
              d="M1482.5 234.078L1441.31 287.178L1481.23 291.064L1482.5 234.078Z"
              fill="url(#paint33_linear_10_1969)"
            />
            <path
              id="Vector 203"
              d="M1482.5 234.078L1443.02 210.197L1523 211.971L1482.5 234.078Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 204"
              d="M1441.31 287.178L1401.25 289.29L1441.18 293.176L1481.23 291.064L1441.31 287.178Z"
              fill="#FE9292"
            />
            <path
              id="Vector 205"
              d="M1441.31 287.178L1401.25 289.29L1441.18 293.176L1481.23 291.064L1441.31 287.178Z"
              fill="#FE9292"
            />
            <path
              id="Vector 206"
              d="M1361.33 285.403L1321.27 287.515L1361.19 291.402L1401.25 289.29L1361.33 285.403Z"
              fill="#FE9292"
            />
            <path
              id="Vector 207"
              d="M1441.18 293.176L1401.25 289.29L1400.85 307.285L1441.18 293.176Z"
              fill="url(#paint34_linear_10_1969)"
            />
            <path
              id="Vector 208"
              d="M1401.25 289.29L1361.19 291.402L1400.85 307.285L1401.25 289.29Z"
              fill="url(#paint35_linear_10_1969)"
            />
            <path
              id="Vector 209"
              d="M1521.16 294.951L1481.23 291.064L1480.83 309.06L1521.16 294.951Z"
              fill="url(#paint36_linear_10_1969)"
            />
            <path
              id="Vector 210"
              d="M1481.23 291.064L1441.18 293.176L1480.83 309.06L1481.23 291.064Z"
              fill="url(#paint37_linear_10_1969)"
            />
            <path
              id="Vector 211"
              d="M1562.48 235.853L1602.98 213.746L1642.46 237.627L1601.27 290.727L1562.48 235.853Z"
              fill="#FF7373"
            />
            <path
              id="Vector 212"
              d="M1482.5 234.078L1523 211.971L1562.48 235.853L1521.29 288.952L1482.5 234.078Z"
              fill="#FF7373"
            />
            <path
              id="Vector 213"
              d="M1562.48 235.853L1523 211.971L1602.98 213.746L1562.48 235.853Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 214"
              d="M1601.27 290.727L1562.48 235.853L1561.21 292.839L1601.27 290.727Z"
              fill="url(#paint38_linear_10_1969)"
            />
            <path
              id="Vector 215"
              d="M1562.48 235.853L1521.29 288.952L1561.21 292.839L1562.48 235.853Z"
              fill="url(#paint39_linear_10_1969)"
            />
            <path
              id="Vector 216"
              d="M1681.25 292.501L1642.46 237.627L1641.19 294.613L1681.25 292.501Z"
              fill="url(#paint40_linear_10_1969)"
            />
            <path
              id="Vector 242"
              d="M1738.26 293.767L1722.44 239.402L1721.17 296.388L1738.26 293.767Z"
              fill="url(#paint41_linear_10_1969)"
            />
            <path
              id="Vector 217"
              d="M1642.46 237.628L1601.27 290.727L1641.19 294.613L1642.46 237.628Z"
              fill="url(#paint42_linear_10_1969)"
            />
            <path
              id="Vector 218"
              d="M1642.46 237.627L1602.98 213.746L1682.96 215.52L1642.46 237.627Z"
              fill="#FFAFAF"
            />
            <path
              id="Vector 219"
              d="M1601.27 290.727L1561.21 292.839L1601.14 296.725L1641.19 294.613L1601.27 290.727Z"
              fill="#FE9292"
            />
            <path
              id="Vector 220"
              d="M1601.27 290.727L1561.21 292.839L1601.14 296.725L1641.19 294.613L1601.27 290.727Z"
              fill="#FE9292"
            />
            <path
              id="Vector 221"
              d="M1521.29 288.952L1481.23 291.064L1521.16 294.951L1561.21 292.839L1521.29 288.952Z"
              fill="#FE9292"
            />
            <path
              id="Vector 222"
              d="M1601.14 296.725L1561.21 292.839L1560.81 310.834L1601.14 296.725Z"
              fill="url(#paint43_linear_10_1969)"
            />
            <path
              id="Vector 223"
              d="M1561.21 292.839L1521.16 294.951L1560.81 310.834L1561.21 292.839Z"
              fill="url(#paint44_linear_10_1969)"
            />
            <path
              id="Vector 224"
              d="M1681.12 298.5L1641.19 294.613L1640.79 312.609L1681.12 298.5Z"
              fill="url(#paint45_linear_10_1969)"
            />
            <path
              id="Vector 225"
              d="M1641.19 294.613L1601.14 296.725L1640.79 312.609L1641.19 294.613Z"
              fill="url(#paint46_linear_10_1969)"
            />
            <path
              id="Vector 227"
              d="M1642.46 237.627L1682.96 215.52L1722.44 239.402L1681.25 292.501L1642.46 237.627Z"
              fill="#FF7373"
            />
            <path
              id="Vector 230"
              d="M1722.44 239.402L1681.25 292.501L1721.17 296.388L1722.44 239.402Z"
              fill="url(#paint47_linear_10_1969)"
            />
            <path
              id="Vector 236"
              d="M1681.25 292.501L1641.19 294.613L1681.12 298.5L1721.17 296.388L1681.25 292.501Z"
              fill="#FE9292"
            />
          </g>
          <g id="Auroracrista Support" {...focusProps(Structure.Auroracrista)}>
            <path
              id="Bone Border_11"
              d="M751.584 406.598L750.314 409.494L753.018 407.855C769.521 397.853 805.414 376.158 817.006 369.363C824.453 364.997 829.557 358.595 833.534 352.283C835.377 349.357 836.989 346.432 838.475 343.736C838.591 343.525 838.706 343.316 838.821 343.108C840.412 340.224 841.854 337.649 843.317 335.577C845.001 333.191 845.624 329.488 845.75 325.311C845.877 321.085 845.495 316.155 844.995 311.15C844.814 309.339 844.618 307.522 844.423 305.721C844.077 302.516 843.736 299.363 843.497 296.388C843.122 291.737 843.008 287.654 843.487 284.658C844.564 277.927 840.659 271.118 835.261 265.847C829.841 260.554 822.665 256.557 816.671 255.515C810.718 254.479 806.007 255.258 801.381 257.473C796.814 259.66 792.345 263.244 786.867 267.726C783.942 270.119 781.271 274.251 778.834 279.3C776.384 284.374 774.117 290.486 772.048 296.945C768.078 309.334 764.804 323.099 762.339 333.459C762.233 333.902 762.13 334.339 762.027 334.768C760.085 342.924 759.928 351.331 759.764 360.088C759.714 362.743 759.664 365.429 759.563 368.15C759.128 379.904 757.762 392.512 751.584 406.598Z"
              fill="#E0CFBE"
              stroke="#857262"
              stroke-width="2"
            />
            <path
              id="Bone Dark Inner_11"
              d="M763 335C758 356 765 378.5 752.5 407C769 397 804.9 375.3 816.5 368.5C831 360 836.5 343.5 842.5 335C848.5 326.5 840.5 297 842.5 284.5C844.5 272 828 258.5 816.5 256.5C805 254.5 798.5 259.5 787.5 268.5C776.5 277.5 768 314 763 335Z"
              fill="#887E72"
            />
            <path
              id="Bone Grey Layer_11"
              d="M811.443 359.873C803.723 364.399 785.386 375.435 769.084 385.28C769.984 379.391 770.361 373.815 770.556 368.558C770.676 365.298 770.735 362.283 770.79 359.45C770.953 351.033 771.085 344.217 772.728 337.316C772.822 336.921 772.917 336.52 773.014 336.116C775.497 325.68 778.686 312.278 782.523 300.301C784.516 294.082 786.602 288.509 788.74 284.083C791.004 279.393 792.827 277.062 793.832 276.24C799.554 271.558 802.981 268.903 806.132 267.394C808.678 266.175 811.068 265.705 814.787 266.352C818.097 266.928 823.343 269.584 827.576 273.717C832.034 278.07 832.857 281.477 832.626 282.92C831.92 287.333 832.154 292.57 832.532 297.272C832.782 300.377 833.154 303.824 833.512 307.141C833.702 308.903 833.888 310.628 834.05 312.245C834.546 317.204 834.858 321.523 834.755 324.981C834.656 328.242 834.201 329.343 834.235 329.358C834.239 329.36 834.248 329.35 834.263 329.328C832.415 331.962 830.708 335.042 829.189 337.795C829.082 337.989 828.975 338.182 828.869 338.376C827.356 341.12 825.891 343.777 824.227 346.42C820.678 352.053 816.715 356.782 811.443 359.873Z"
              stroke="#E0CFBE"
              stroke-width="20"
            />
            <path
              id="Bone White Surface_11"
              d="M814.983 365.912C804.902 371.821 776.544 388.938 758.436 399.898C762.216 388.456 763.202 377.99 763.56 368.299C763.668 365.391 763.721 362.587 763.773 359.866C763.937 351.213 764.086 343.391 765.918 335.695C766.018 335.277 766.119 334.853 766.221 334.424C768.692 324.037 771.936 310.404 775.857 298.165C777.898 291.793 780.099 285.878 782.436 281.039C784.811 276.121 787.173 272.644 789.4 270.822C794.966 266.268 799.057 263.021 803.108 261.081C806.978 259.227 810.845 258.562 815.986 259.456C821.004 260.328 827.478 263.838 832.467 268.709C837.523 273.646 840.307 279.218 839.538 284.026C838.976 287.537 839.134 292.04 839.51 296.71C839.753 299.731 840.105 302.989 840.455 306.236C840.648 308.024 840.841 309.809 841.015 311.549C841.514 316.536 841.87 321.245 841.751 325.191C841.628 329.285 840.998 331.926 840.049 333.27C838.437 335.554 836.89 338.328 835.318 341.176C835.206 341.38 835.094 341.584 834.981 341.789C833.486 344.501 831.927 347.328 830.149 350.151C826.328 356.216 821.64 362.01 814.983 365.912Z"
              stroke="white"
              stroke-width="6"
            />
          </g>
          <g id="Labels">
            <g id="Group 4">
              <path
                id="Crenulate Wall"
                d="M42.4783 1921.36C40.6543 1921.36 38.9863 1921.05 37.4743 1920.42C35.9623 1919.8 34.6543 1918.91 33.5503 1917.76C32.4463 1916.58 31.5823 1915.2 30.9583 1913.62C30.3583 1912.01 30.0583 1910.26 30.0583 1908.36C30.0583 1906.54 30.3823 1904.85 31.0303 1903.29C31.6783 1901.73 32.5783 1900.36 33.7303 1899.18C34.8823 1898.01 36.2263 1897.1 37.7623 1896.45C39.2983 1895.8 40.9663 1895.48 42.7663 1895.48C43.9903 1895.48 45.1783 1895.66 46.3303 1896.02C47.4823 1896.38 48.5383 1896.88 49.4983 1897.53C50.4583 1898.15 51.2623 1898.88 51.9103 1899.72L48.9223 1903C48.2983 1902.35 47.6503 1901.81 46.9783 1901.38C46.3303 1900.92 45.6463 1900.59 44.9263 1900.37C44.2303 1900.13 43.5103 1900.01 42.7663 1900.01C41.6623 1900.01 40.6183 1900.22 39.6343 1900.62C38.6743 1901.03 37.8343 1901.61 37.1143 1902.35C36.4183 1903.1 35.8663 1903.98 35.4583 1905.02C35.0503 1906.02 34.8463 1907.15 34.8463 1908.4C34.8463 1909.67 35.0383 1910.82 35.4223 1911.86C35.8303 1912.89 36.3943 1913.78 37.1143 1914.52C37.8583 1915.26 38.7343 1915.84 39.7423 1916.25C40.7743 1916.63 41.9023 1916.82 43.1263 1916.82C43.9183 1916.82 44.6863 1916.72 45.4303 1916.5C46.1743 1916.28 46.8583 1915.98 47.4823 1915.6C48.1303 1915.19 48.7183 1914.72 49.2463 1914.2L51.5503 1917.9C50.9743 1918.55 50.2063 1919.14 49.2463 1919.67C48.2863 1920.2 47.2063 1920.62 46.0063 1920.93C44.8303 1921.22 43.6543 1921.36 42.4783 1921.36ZM55.6037 1921V1902.03H59.9597L60.0317 1908.08L59.4197 1906.71C59.6837 1905.75 60.1397 1904.88 60.7877 1904.12C61.4357 1903.35 62.1797 1902.75 63.0197 1902.32C63.8837 1901.86 64.7837 1901.63 65.7197 1901.63C66.1277 1901.63 66.5117 1901.67 66.8717 1901.74C67.2557 1901.81 67.5677 1901.9 67.8077 1901.99L66.6197 1906.85C66.3557 1906.71 66.0317 1906.59 65.6477 1906.49C65.2637 1906.4 64.8797 1906.35 64.4957 1906.35C63.8957 1906.35 63.3197 1906.47 62.7677 1906.71C62.2397 1906.92 61.7717 1907.24 61.3637 1907.64C60.9557 1908.05 60.6317 1908.53 60.3917 1909.08C60.1757 1909.61 60.0677 1910.21 60.0677 1910.88V1921H55.6037ZM78.8395 1921.36C76.8475 1921.36 75.0835 1920.94 73.5475 1920.1C72.0355 1919.26 70.8475 1918.12 69.9835 1916.68C69.1435 1915.22 68.7235 1913.55 68.7235 1911.68C68.7235 1910.19 68.9635 1908.83 69.4435 1907.61C69.9235 1906.38 70.5835 1905.33 71.4235 1904.44C72.2875 1903.53 73.3075 1902.83 74.4835 1902.35C75.6835 1901.85 76.9915 1901.6 78.4075 1901.6C79.6555 1901.6 80.8195 1901.84 81.8995 1902.32C82.9795 1902.8 83.9155 1903.46 84.7075 1904.3C85.4995 1905.11 86.0995 1906.1 86.5075 1907.25C86.9395 1908.38 87.1435 1909.61 87.1195 1910.96L87.0835 1912.5H71.7115L70.8835 1909.48H83.3755L82.7995 1910.09V1909.3C82.7275 1908.56 82.4875 1907.91 82.0795 1907.36C81.6715 1906.78 81.1435 1906.34 80.4955 1906.02C79.8715 1905.69 79.1755 1905.52 78.4075 1905.52C77.2315 1905.52 76.2355 1905.75 75.4195 1906.2C74.6275 1906.66 74.0275 1907.32 73.6195 1908.18C73.2115 1909.02 73.0075 1910.08 73.0075 1911.35C73.0075 1912.58 73.2595 1913.64 73.7635 1914.56C74.2915 1915.47 75.0235 1916.18 75.9595 1916.68C76.9195 1917.16 78.0355 1917.4 79.3075 1917.4C80.1955 1917.4 81.0115 1917.26 81.7555 1916.97C82.4995 1916.68 83.3035 1916.16 84.1675 1915.42L86.3635 1918.48C85.7155 1919.08 84.9715 1919.6 84.1315 1920.03C83.3155 1920.44 82.4515 1920.76 81.5395 1921C80.6275 1921.24 79.7275 1921.36 78.8395 1921.36ZM91.0412 1921V1902.03H95.3612L95.4332 1905.92L94.6052 1906.35C94.8452 1905.48 95.3132 1904.7 96.0092 1904.01C96.7052 1903.29 97.5332 1902.71 98.4932 1902.28C99.4532 1901.85 100.437 1901.63 101.445 1901.63C102.885 1901.63 104.085 1901.92 105.045 1902.5C106.029 1903.07 106.761 1903.94 107.241 1905.09C107.745 1906.24 107.997 1907.68 107.997 1909.41V1921H103.569V1909.73C103.569 1908.77 103.437 1907.98 103.173 1907.36C102.909 1906.71 102.501 1906.24 101.949 1905.95C101.397 1905.64 100.725 1905.5 99.9332 1905.52C99.2852 1905.52 98.6852 1905.63 98.1332 1905.84C97.6052 1906.04 97.1372 1906.32 96.7292 1906.71C96.3452 1907.07 96.0332 1907.49 95.7932 1907.97C95.5772 1908.45 95.4692 1908.98 95.4692 1909.55V1921H93.2732C92.8412 1921 92.4332 1921 92.0492 1921C91.6892 1921 91.3532 1921 91.0412 1921ZM119.567 1921.36C118.199 1921.36 117.011 1921.06 116.003 1920.46C114.995 1919.84 114.227 1918.96 113.699 1917.83C113.171 1916.68 112.907 1915.31 112.907 1913.73V1902.03H117.335V1912.79C117.335 1913.8 117.491 1914.66 117.803 1915.38C118.115 1916.08 118.571 1916.62 119.171 1917C119.771 1917.39 120.491 1917.58 121.331 1917.58C121.955 1917.58 122.519 1917.48 123.023 1917.29C123.551 1917.08 124.007 1916.79 124.391 1916.43C124.775 1916.04 125.075 1915.6 125.291 1915.1C125.507 1914.57 125.615 1914 125.615 1913.4V1902.03H130.043V1921H125.723L125.651 1917.04L126.443 1916.61C126.155 1917.52 125.663 1918.34 124.967 1919.06C124.295 1919.75 123.491 1920.32 122.555 1920.75C121.619 1921.16 120.623 1921.36 119.567 1921.36ZM135.269 1921V1894.36H139.733V1921H135.269ZM151.748 1921.36C150.188 1921.36 148.772 1920.93 147.5 1920.06C146.228 1919.2 145.208 1918.02 144.44 1916.54C143.672 1915.05 143.288 1913.36 143.288 1911.46C143.288 1909.56 143.672 1907.87 144.44 1906.38C145.208 1904.9 146.252 1903.73 147.572 1902.89C148.892 1902.05 150.38 1901.63 152.036 1901.63C152.996 1901.63 153.872 1901.78 154.664 1902.06C155.456 1902.33 156.152 1902.71 156.752 1903.22C157.352 1903.72 157.844 1904.3 158.228 1904.94C158.636 1905.59 158.912 1906.29 159.056 1907.03L158.084 1906.78V1902.03H162.548V1921H158.048V1916.46L159.092 1916.28C158.924 1916.93 158.612 1917.57 158.156 1918.19C157.724 1918.79 157.172 1919.33 156.5 1919.81C155.852 1920.27 155.12 1920.64 154.304 1920.93C153.512 1921.22 152.66 1921.36 151.748 1921.36ZM152.972 1917.44C154.004 1917.44 154.916 1917.18 155.708 1916.68C156.5 1916.18 157.112 1915.48 157.544 1914.59C158 1913.68 158.228 1912.64 158.228 1911.46C158.228 1910.31 158 1909.29 157.544 1908.4C157.112 1907.51 156.5 1906.82 155.708 1906.31C154.916 1905.81 154.004 1905.56 152.972 1905.56C151.94 1905.56 151.028 1905.81 150.236 1906.31C149.468 1906.82 148.868 1907.51 148.436 1908.4C148.004 1909.29 147.788 1910.31 147.788 1911.46C147.788 1912.64 148.004 1913.68 148.436 1914.59C148.868 1915.48 149.468 1916.18 150.236 1916.68C151.028 1917.18 151.94 1917.44 152.972 1917.44ZM169.734 1921V1897.2H174.162V1921H169.734ZM165.99 1906.13V1902.03H178.302V1906.13H165.99ZM190.39 1921.36C188.398 1921.36 186.634 1920.94 185.098 1920.1C183.586 1919.26 182.398 1918.12 181.534 1916.68C180.694 1915.22 180.274 1913.55 180.274 1911.68C180.274 1910.19 180.514 1908.83 180.994 1907.61C181.474 1906.38 182.134 1905.33 182.974 1904.44C183.838 1903.53 184.858 1902.83 186.034 1902.35C187.234 1901.85 188.542 1901.6 189.958 1901.6C191.206 1901.6 192.37 1901.84 193.45 1902.32C194.53 1902.8 195.466 1903.46 196.258 1904.3C197.05 1905.11 197.65 1906.1 198.058 1907.25C198.49 1908.38 198.694 1909.61 198.67 1910.96L198.634 1912.5H183.262L182.434 1909.48H194.926L194.35 1910.09V1909.3C194.278 1908.56 194.038 1907.91 193.63 1907.36C193.222 1906.78 192.694 1906.34 192.046 1906.02C191.422 1905.69 190.726 1905.52 189.958 1905.52C188.782 1905.52 187.786 1905.75 186.97 1906.2C186.178 1906.66 185.578 1907.32 185.17 1908.18C184.762 1909.02 184.558 1910.08 184.558 1911.35C184.558 1912.58 184.81 1913.64 185.314 1914.56C185.842 1915.47 186.574 1916.18 187.51 1916.68C188.47 1917.16 189.586 1917.4 190.858 1917.4C191.746 1917.4 192.562 1917.26 193.306 1916.97C194.05 1916.68 194.854 1916.16 195.718 1915.42L197.914 1918.48C197.266 1919.08 196.522 1919.6 195.682 1920.03C194.866 1920.44 194.002 1920.76 193.09 1921C192.178 1921.24 191.278 1921.36 190.39 1921.36ZM131.046 1966L123.198 1940.8H128.094L132.558 1955.67C132.702 1956.12 132.834 1956.63 132.954 1957.18C133.074 1957.73 133.182 1958.28 133.278 1958.84C133.374 1959.36 133.458 1959.86 133.53 1960.31C133.602 1960.77 133.674 1961.15 133.746 1961.46L132.774 1961.43C133.062 1960.3 133.29 1959.39 133.458 1958.69C133.626 1958 133.77 1957.42 133.89 1956.96C134.034 1956.48 134.178 1956.04 134.322 1955.63L138.57 1944.76H142.566L146.706 1955.63C146.946 1956.3 147.162 1956.95 147.354 1957.58C147.546 1958.18 147.702 1958.78 147.822 1959.38C147.966 1959.95 148.098 1960.55 148.218 1961.18L147.354 1961.36C147.45 1960.78 147.522 1960.31 147.57 1959.95C147.618 1959.59 147.666 1959.27 147.714 1958.98C147.762 1958.69 147.81 1958.42 147.858 1958.15C147.906 1957.86 147.978 1957.53 148.074 1957.14C148.194 1956.74 148.338 1956.22 148.506 1955.6L152.934 1940.8H157.794L149.91 1966H146.526L140.118 1950.66L140.55 1950.81L134.466 1966H131.046ZM167.252 1966.36C165.692 1966.36 164.276 1965.93 163.004 1965.06C161.732 1964.2 160.712 1963.02 159.944 1961.54C159.176 1960.05 158.792 1958.36 158.792 1956.46C158.792 1954.56 159.176 1952.87 159.944 1951.38C160.712 1949.9 161.756 1948.73 163.076 1947.89C164.396 1947.05 165.884 1946.63 167.54 1946.63C168.5 1946.63 169.376 1946.78 170.168 1947.06C170.96 1947.33 171.656 1947.71 172.256 1948.22C172.856 1948.72 173.348 1949.3 173.732 1949.94C174.14 1950.59 174.416 1951.29 174.56 1952.03L173.588 1951.78V1947.03H178.052V1966H173.552V1961.46L174.596 1961.28C174.428 1961.93 174.116 1962.57 173.66 1963.19C173.228 1963.79 172.676 1964.33 172.004 1964.81C171.356 1965.27 170.624 1965.64 169.808 1965.93C169.016 1966.22 168.164 1966.36 167.252 1966.36ZM168.476 1962.44C169.508 1962.44 170.42 1962.18 171.212 1961.68C172.004 1961.18 172.616 1960.48 173.048 1959.59C173.504 1958.68 173.732 1957.64 173.732 1956.46C173.732 1955.31 173.504 1954.29 173.048 1953.4C172.616 1952.51 172.004 1951.82 171.212 1951.31C170.42 1950.81 169.508 1950.56 168.476 1950.56C167.444 1950.56 166.532 1950.81 165.74 1951.31C164.972 1951.82 164.372 1952.51 163.94 1953.4C163.508 1954.29 163.292 1955.31 163.292 1956.46C163.292 1957.64 163.508 1958.68 163.94 1959.59C164.372 1960.48 164.972 1961.18 165.74 1961.68C166.532 1962.18 167.444 1962.44 168.476 1962.44ZM183.222 1966V1939.36H187.686V1966H183.222ZM192.925 1966V1939.36H197.389V1966H192.925Z"
                fill="#F6F6F6"
              />
              <g id="Vector 248" filter="url(#filter2_d_10_1969)">
                <path
                  d="M226 1936C514.496 1936 489.089 1786 708 1786"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 5">
              <path
                id="Tentola Majora_2"
                d="M534.424 2623V2602.12H527.224V2597.8H546.52V2602.12H539.104V2623H534.424ZM555.625 2623.36C553.633 2623.36 551.869 2622.94 550.333 2622.1C548.821 2621.26 547.633 2620.12 546.769 2618.68C545.929 2617.22 545.509 2615.55 545.509 2613.68C545.509 2612.19 545.749 2610.83 546.229 2609.61C546.709 2608.38 547.369 2607.33 548.209 2606.44C549.073 2605.53 550.093 2604.83 551.269 2604.35C552.469 2603.85 553.777 2603.6 555.193 2603.6C556.441 2603.6 557.605 2603.84 558.685 2604.32C559.765 2604.8 560.701 2605.46 561.493 2606.3C562.285 2607.11 562.885 2608.1 563.293 2609.25C563.725 2610.38 563.929 2611.61 563.905 2612.96L563.869 2614.5H548.497L547.669 2611.48H560.161L559.585 2612.09V2611.3C559.513 2610.56 559.273 2609.91 558.865 2609.36C558.457 2608.78 557.929 2608.34 557.281 2608.02C556.657 2607.69 555.961 2607.52 555.193 2607.52C554.017 2607.52 553.021 2607.75 552.205 2608.2C551.413 2608.66 550.813 2609.32 550.405 2610.18C549.997 2611.02 549.793 2612.08 549.793 2613.35C549.793 2614.58 550.045 2615.64 550.549 2616.56C551.077 2617.47 551.809 2618.18 552.745 2618.68C553.705 2619.16 554.821 2619.4 556.093 2619.4C556.981 2619.4 557.797 2619.26 558.541 2618.97C559.285 2618.68 560.089 2618.16 560.953 2617.42L563.149 2620.48C562.501 2621.08 561.757 2621.6 560.917 2622.03C560.101 2622.44 559.237 2622.76 558.325 2623C557.413 2623.24 556.513 2623.36 555.625 2623.36ZM567.826 2623V2604.03H572.146L572.218 2607.92L571.39 2608.35C571.63 2607.48 572.098 2606.7 572.794 2606.01C573.49 2605.29 574.318 2604.71 575.278 2604.28C576.238 2603.85 577.222 2603.63 578.23 2603.63C579.67 2603.63 580.87 2603.92 581.83 2604.5C582.814 2605.07 583.546 2605.94 584.026 2607.09C584.53 2608.24 584.782 2609.68 584.782 2611.41V2623H580.354V2611.73C580.354 2610.77 580.222 2609.98 579.958 2609.36C579.694 2608.71 579.286 2608.24 578.734 2607.95C578.182 2607.64 577.51 2607.5 576.718 2607.52C576.07 2607.52 575.47 2607.63 574.918 2607.84C574.39 2608.04 573.922 2608.32 573.514 2608.71C573.13 2609.07 572.818 2609.49 572.578 2609.97C572.362 2610.45 572.254 2610.98 572.254 2611.55V2623H570.058C569.626 2623 569.218 2623 568.834 2623C568.474 2623 568.138 2623 567.826 2623ZM591.816 2623V2599.2H596.244V2623H591.816ZM588.072 2608.13V2604.03H600.384V2608.13H588.072ZM612.256 2623.36C610.36 2623.36 608.668 2622.94 607.18 2622.1C605.692 2621.24 604.516 2620.06 603.652 2618.57C602.788 2617.08 602.356 2615.39 602.356 2613.5C602.356 2611.6 602.788 2609.91 603.652 2608.42C604.516 2606.93 605.692 2605.77 607.18 2604.93C608.668 2604.06 610.36 2603.63 612.256 2603.63C614.128 2603.63 615.808 2604.06 617.296 2604.93C618.784 2605.77 619.948 2606.93 620.788 2608.42C621.652 2609.91 622.084 2611.6 622.084 2613.5C622.084 2615.39 621.652 2617.08 620.788 2618.57C619.948 2620.06 618.784 2621.24 617.296 2622.1C615.808 2622.94 614.128 2623.36 612.256 2623.36ZM612.256 2619.44C613.288 2619.44 614.2 2619.17 614.992 2618.64C615.808 2618.12 616.444 2617.41 616.9 2616.52C617.38 2615.63 617.608 2614.62 617.584 2613.5C617.608 2612.34 617.38 2611.32 616.9 2610.44C616.444 2609.55 615.808 2608.85 614.992 2608.35C614.2 2607.82 613.288 2607.56 612.256 2607.56C611.224 2607.56 610.288 2607.82 609.448 2608.35C608.632 2608.85 607.996 2609.56 607.54 2610.47C607.084 2611.36 606.856 2612.37 606.856 2613.5C606.856 2614.62 607.084 2615.63 607.54 2616.52C607.996 2617.41 608.632 2618.12 609.448 2618.64C610.288 2619.17 611.224 2619.44 612.256 2619.44ZM626.081 2623V2596.36H630.545V2623H626.081ZM642.561 2623.36C641.001 2623.36 639.585 2622.93 638.313 2622.06C637.041 2621.2 636.021 2620.02 635.253 2618.54C634.485 2617.05 634.101 2615.36 634.101 2613.46C634.101 2611.56 634.485 2609.87 635.253 2608.38C636.021 2606.9 637.065 2605.73 638.385 2604.89C639.705 2604.05 641.193 2603.63 642.849 2603.63C643.809 2603.63 644.685 2603.78 645.477 2604.06C646.269 2604.33 646.965 2604.71 647.565 2605.22C648.165 2605.72 648.657 2606.3 649.041 2606.94C649.449 2607.59 649.725 2608.29 649.869 2609.03L648.897 2608.78V2604.03H653.361V2623H648.861V2618.46L649.905 2618.28C649.737 2618.93 649.425 2619.57 648.969 2620.19C648.537 2620.79 647.985 2621.33 647.313 2621.81C646.665 2622.27 645.933 2622.64 645.117 2622.93C644.325 2623.22 643.473 2623.36 642.561 2623.36ZM643.785 2619.44C644.817 2619.44 645.729 2619.18 646.521 2618.68C647.313 2618.18 647.925 2617.48 648.357 2616.59C648.813 2615.68 649.041 2614.64 649.041 2613.46C649.041 2612.31 648.813 2611.29 648.357 2610.4C647.925 2609.51 647.313 2608.82 646.521 2608.31C645.729 2607.81 644.817 2607.56 643.785 2607.56C642.753 2607.56 641.841 2607.81 641.049 2608.31C640.281 2608.82 639.681 2609.51 639.249 2610.4C638.817 2611.29 638.601 2612.31 638.601 2613.46C638.601 2614.64 638.817 2615.68 639.249 2616.59C639.681 2617.48 640.281 2618.18 641.049 2618.68C641.841 2619.18 642.753 2619.44 643.785 2619.44ZM669.868 2623V2597.8H674.296L683.476 2612.74L680.884 2612.7L690.172 2597.8H694.384V2623H689.74V2613.53C689.74 2611.37 689.788 2609.43 689.884 2607.7C690.004 2605.97 690.196 2604.26 690.46 2602.55L691.036 2604.1L683.224 2616.16H680.848L673.288 2604.21L673.792 2602.55C674.056 2604.16 674.236 2605.82 674.332 2607.52C674.452 2609.2 674.512 2611.2 674.512 2613.53V2623H669.868ZM707.529 2623.36C705.969 2623.36 704.553 2622.93 703.281 2622.06C702.009 2621.2 700.989 2620.02 700.221 2618.54C699.453 2617.05 699.069 2615.36 699.069 2613.46C699.069 2611.56 699.453 2609.87 700.221 2608.38C700.989 2606.9 702.033 2605.73 703.353 2604.89C704.673 2604.05 706.161 2603.63 707.817 2603.63C708.777 2603.63 709.653 2603.78 710.445 2604.06C711.237 2604.33 711.933 2604.71 712.533 2605.22C713.133 2605.72 713.625 2606.3 714.009 2606.94C714.417 2607.59 714.693 2608.29 714.837 2609.03L713.865 2608.78V2604.03H718.329V2623H713.829V2618.46L714.873 2618.28C714.705 2618.93 714.393 2619.57 713.937 2620.19C713.505 2620.79 712.953 2621.33 712.281 2621.81C711.633 2622.27 710.901 2622.64 710.085 2622.93C709.293 2623.22 708.441 2623.36 707.529 2623.36ZM708.753 2619.44C709.785 2619.44 710.697 2619.18 711.489 2618.68C712.281 2618.18 712.893 2617.48 713.325 2616.59C713.781 2615.68 714.009 2614.64 714.009 2613.46C714.009 2612.31 713.781 2611.29 713.325 2610.4C712.893 2609.51 712.281 2608.82 711.489 2608.31C710.697 2607.81 709.785 2607.56 708.753 2607.56C707.721 2607.56 706.809 2607.81 706.017 2608.31C705.249 2608.82 704.649 2609.51 704.217 2610.4C703.785 2611.29 703.569 2612.31 703.569 2613.46C703.569 2614.64 703.785 2615.68 704.217 2616.59C704.649 2617.48 705.249 2618.18 706.017 2618.68C706.809 2619.18 707.721 2619.44 708.753 2619.44ZM721.375 2630.24L719.683 2626.85C720.691 2626.85 721.495 2626.7 722.095 2626.38C722.719 2626.07 723.175 2625.59 723.463 2624.94C723.775 2624.3 723.931 2623.47 723.931 2622.46V2604.03H728.359V2623.5C728.359 2624.92 728.071 2626.13 727.495 2627.14C726.943 2628.15 726.139 2628.92 725.083 2629.44C724.051 2629.97 722.815 2630.24 721.375 2630.24ZM726.235 2600C725.323 2600 724.615 2599.78 724.111 2599.35C723.631 2598.89 723.391 2598.26 723.391 2597.44C723.391 2596.67 723.643 2596.05 724.147 2595.57C724.651 2595.09 725.347 2594.85 726.235 2594.85C727.123 2594.85 727.807 2595.08 728.287 2595.53C728.791 2595.96 729.043 2596.6 729.043 2597.44C729.043 2598.18 728.791 2598.8 728.287 2599.28C727.783 2599.76 727.099 2600 726.235 2600ZM742.334 2623.36C740.438 2623.36 738.746 2622.94 737.258 2622.1C735.77 2621.24 734.594 2620.06 733.73 2618.57C732.866 2617.08 732.434 2615.39 732.434 2613.5C732.434 2611.6 732.866 2609.91 733.73 2608.42C734.594 2606.93 735.77 2605.77 737.258 2604.93C738.746 2604.06 740.438 2603.63 742.334 2603.63C744.206 2603.63 745.886 2604.06 747.374 2604.93C748.862 2605.77 750.026 2606.93 750.866 2608.42C751.73 2609.91 752.162 2611.6 752.162 2613.5C752.162 2615.39 751.73 2617.08 750.866 2618.57C750.026 2620.06 748.862 2621.24 747.374 2622.1C745.886 2622.94 744.206 2623.36 742.334 2623.36ZM742.334 2619.44C743.366 2619.44 744.278 2619.17 745.07 2618.64C745.886 2618.12 746.522 2617.41 746.978 2616.52C747.458 2615.63 747.686 2614.62 747.662 2613.5C747.686 2612.34 747.458 2611.32 746.978 2610.44C746.522 2609.55 745.886 2608.85 745.07 2608.35C744.278 2607.82 743.366 2607.56 742.334 2607.56C741.302 2607.56 740.366 2607.82 739.526 2608.35C738.71 2608.85 738.074 2609.56 737.618 2610.47C737.162 2611.36 736.934 2612.37 736.934 2613.5C736.934 2614.62 737.162 2615.63 737.618 2616.52C738.074 2617.41 738.71 2618.12 739.526 2618.64C740.366 2619.17 741.302 2619.44 742.334 2619.44ZM756.123 2623V2604.03H760.479L760.551 2610.08L759.939 2608.71C760.203 2607.75 760.659 2606.88 761.307 2606.12C761.955 2605.35 762.699 2604.75 763.539 2604.32C764.403 2603.86 765.303 2603.63 766.239 2603.63C766.647 2603.63 767.031 2603.67 767.391 2603.74C767.775 2603.81 768.087 2603.9 768.327 2603.99L767.139 2608.85C766.875 2608.71 766.551 2608.59 766.167 2608.49C765.783 2608.4 765.399 2608.35 765.015 2608.35C764.415 2608.35 763.839 2608.47 763.287 2608.71C762.759 2608.92 762.291 2609.24 761.883 2609.64C761.475 2610.05 761.151 2610.53 760.911 2611.08C760.695 2611.61 760.587 2612.21 760.587 2612.88V2623H756.123ZM777.631 2623.36C776.071 2623.36 774.655 2622.93 773.383 2622.06C772.111 2621.2 771.091 2620.02 770.323 2618.54C769.555 2617.05 769.171 2615.36 769.171 2613.46C769.171 2611.56 769.555 2609.87 770.323 2608.38C771.091 2606.9 772.135 2605.73 773.455 2604.89C774.775 2604.05 776.263 2603.63 777.919 2603.63C778.879 2603.63 779.755 2603.78 780.547 2604.06C781.339 2604.33 782.035 2604.71 782.635 2605.22C783.235 2605.72 783.727 2606.3 784.111 2606.94C784.519 2607.59 784.795 2608.29 784.939 2609.03L783.967 2608.78V2604.03H788.431V2623H783.931V2618.46L784.975 2618.28C784.807 2618.93 784.495 2619.57 784.039 2620.19C783.607 2620.79 783.055 2621.33 782.383 2621.81C781.735 2622.27 781.003 2622.64 780.187 2622.93C779.395 2623.22 778.543 2623.36 777.631 2623.36ZM778.855 2619.44C779.887 2619.44 780.799 2619.18 781.591 2618.68C782.383 2618.18 782.995 2617.48 783.427 2616.59C783.883 2615.68 784.111 2614.64 784.111 2613.46C784.111 2612.31 783.883 2611.29 783.427 2610.4C782.995 2609.51 782.383 2608.82 781.591 2608.31C780.799 2607.81 779.887 2607.56 778.855 2607.56C777.823 2607.56 776.911 2607.81 776.119 2608.31C775.351 2608.82 774.751 2609.51 774.319 2610.4C773.887 2611.29 773.671 2612.31 773.671 2613.46C773.671 2614.64 773.887 2615.68 774.319 2616.59C774.751 2617.48 775.351 2618.18 776.119 2618.68C776.911 2619.18 777.823 2619.44 778.855 2619.44Z"
                fill="#F6F6F6"
              />
              <g id="Vector 251" filter="url(#filter3_d_10_1969)">
                <path
                  d="M824 2613C1018.53 2613 1149 1941 1149 1941"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 7">
              <path
                id="Vibratory Membrane_2"
                d="M536.692 2973L526.612 2947.8H531.724L537.34 2962.24C537.628 2962.98 537.88 2963.65 538.096 2964.25C538.312 2964.83 538.504 2965.36 538.672 2965.84C538.84 2966.32 538.984 2966.78 539.104 2967.24C539.248 2967.7 539.404 2968.18 539.572 2968.68H538.564C538.732 2968.03 538.912 2967.4 539.104 2966.77C539.296 2966.12 539.512 2965.44 539.752 2964.72C540.016 2964 540.328 2963.17 540.688 2962.24L545.944 2947.8H551.092L540.94 2973H536.692ZM554.795 2973V2954.03H559.223V2973H554.795ZM556.955 2950C556.067 2950 555.371 2949.78 554.867 2949.35C554.387 2948.89 554.147 2948.26 554.147 2947.44C554.147 2946.67 554.399 2946.05 554.903 2945.57C555.407 2945.09 556.091 2944.85 556.955 2944.85C557.867 2944.85 558.563 2945.08 559.043 2945.53C559.547 2945.96 559.799 2946.6 559.799 2947.44C559.799 2948.18 559.547 2948.8 559.043 2949.28C558.539 2949.76 557.843 2950 556.955 2950ZM575.314 2973.36C574.474 2973.36 573.646 2973.24 572.83 2973C572.038 2972.74 571.318 2972.39 570.67 2971.96C570.022 2971.52 569.482 2971.04 569.05 2970.52C568.618 2969.96 568.33 2969.41 568.186 2968.86L569.23 2968.39L569.122 2972.93H564.838V2946.36H569.266V2958.42L568.474 2958.06C568.594 2957.48 568.858 2956.94 569.266 2956.44C569.698 2955.91 570.226 2955.44 570.85 2955.04C571.474 2954.6 572.158 2954.27 572.902 2954.03C573.646 2953.76 574.402 2953.63 575.17 2953.63C576.874 2953.63 578.374 2954.05 579.67 2954.89C580.99 2955.73 582.022 2956.9 582.766 2958.38C583.534 2959.87 583.918 2961.56 583.918 2963.46C583.918 2965.38 583.546 2967.08 582.802 2968.57C582.058 2970.06 581.026 2971.24 579.706 2972.1C578.41 2972.94 576.946 2973.36 575.314 2973.36ZM574.378 2969.47C575.386 2969.47 576.286 2969.22 577.078 2968.72C577.87 2968.19 578.494 2967.48 578.95 2966.59C579.406 2965.68 579.634 2964.64 579.634 2963.46C579.634 2962.31 579.406 2961.29 578.95 2960.4C578.518 2959.51 577.906 2958.82 577.114 2958.31C576.322 2957.81 575.41 2957.56 574.378 2957.56C573.346 2957.56 572.434 2957.81 571.642 2958.31C570.85 2958.82 570.226 2959.51 569.77 2960.4C569.314 2961.29 569.086 2962.31 569.086 2963.46C569.086 2964.64 569.314 2965.68 569.77 2966.59C570.226 2967.48 570.85 2968.19 571.642 2968.72C572.434 2969.22 573.346 2969.47 574.378 2969.47ZM587.865 2973V2954.03H592.221L592.293 2960.08L591.681 2958.71C591.945 2957.75 592.401 2956.88 593.049 2956.12C593.697 2955.35 594.441 2954.75 595.281 2954.32C596.145 2953.86 597.045 2953.63 597.981 2953.63C598.389 2953.63 598.773 2953.67 599.133 2953.74C599.517 2953.81 599.829 2953.9 600.069 2953.99L598.881 2958.85C598.617 2958.71 598.293 2958.59 597.909 2958.49C597.525 2958.4 597.141 2958.35 596.757 2958.35C596.157 2958.35 595.581 2958.47 595.029 2958.71C594.501 2958.92 594.033 2959.24 593.625 2959.64C593.217 2960.05 592.893 2960.53 592.653 2961.08C592.437 2961.61 592.329 2962.21 592.329 2962.88V2973H587.865ZM609.373 2973.36C607.813 2973.36 606.397 2972.93 605.125 2972.06C603.853 2971.2 602.833 2970.02 602.065 2968.54C601.297 2967.05 600.913 2965.36 600.913 2963.46C600.913 2961.56 601.297 2959.87 602.065 2958.38C602.833 2956.9 603.877 2955.73 605.197 2954.89C606.517 2954.05 608.005 2953.63 609.661 2953.63C610.621 2953.63 611.497 2953.78 612.289 2954.06C613.081 2954.33 613.777 2954.71 614.377 2955.22C614.977 2955.72 615.469 2956.3 615.853 2956.94C616.261 2957.59 616.537 2958.29 616.681 2959.03L615.709 2958.78V2954.03H620.173V2973H615.673V2968.46L616.717 2968.28C616.549 2968.93 616.237 2969.57 615.781 2970.19C615.349 2970.79 614.797 2971.33 614.125 2971.81C613.477 2972.27 612.745 2972.64 611.929 2972.93C611.137 2973.22 610.285 2973.36 609.373 2973.36ZM610.597 2969.44C611.629 2969.44 612.541 2969.18 613.333 2968.68C614.125 2968.18 614.737 2967.48 615.169 2966.59C615.625 2965.68 615.853 2964.64 615.853 2963.46C615.853 2962.31 615.625 2961.29 615.169 2960.4C614.737 2959.51 614.125 2958.82 613.333 2958.31C612.541 2957.81 611.629 2957.56 610.597 2957.56C609.565 2957.56 608.653 2957.81 607.861 2958.31C607.093 2958.82 606.493 2959.51 606.061 2960.4C605.629 2961.29 605.413 2962.31 605.413 2963.46C605.413 2964.64 605.629 2965.68 606.061 2966.59C606.493 2967.48 607.093 2968.18 607.861 2968.68C608.653 2969.18 609.565 2969.44 610.597 2969.44ZM627.359 2973V2949.2H631.787V2973H627.359ZM623.615 2958.13V2954.03H635.927V2958.13H623.615ZM647.799 2973.36C645.903 2973.36 644.211 2972.94 642.723 2972.1C641.235 2971.24 640.059 2970.06 639.195 2968.57C638.331 2967.08 637.899 2965.39 637.899 2963.5C637.899 2961.6 638.331 2959.91 639.195 2958.42C640.059 2956.93 641.235 2955.77 642.723 2954.93C644.211 2954.06 645.903 2953.63 647.799 2953.63C649.671 2953.63 651.351 2954.06 652.839 2954.93C654.327 2955.77 655.491 2956.93 656.331 2958.42C657.195 2959.91 657.627 2961.6 657.627 2963.5C657.627 2965.39 657.195 2967.08 656.331 2968.57C655.491 2970.06 654.327 2971.24 652.839 2972.1C651.351 2972.94 649.671 2973.36 647.799 2973.36ZM647.799 2969.44C648.831 2969.44 649.743 2969.17 650.535 2968.64C651.351 2968.12 651.987 2967.41 652.443 2966.52C652.923 2965.63 653.151 2964.62 653.127 2963.5C653.151 2962.34 652.923 2961.32 652.443 2960.44C651.987 2959.55 651.351 2958.85 650.535 2958.35C649.743 2957.82 648.831 2957.56 647.799 2957.56C646.767 2957.56 645.831 2957.82 644.991 2958.35C644.175 2958.85 643.539 2959.56 643.083 2960.47C642.627 2961.36 642.399 2962.37 642.399 2963.5C642.399 2964.62 642.627 2965.63 643.083 2966.52C643.539 2967.41 644.175 2968.12 644.991 2968.64C645.831 2969.17 646.767 2969.44 647.799 2969.44ZM661.588 2973V2954.03H665.944L666.016 2960.08L665.404 2958.71C665.668 2957.75 666.124 2956.88 666.772 2956.12C667.42 2955.35 668.164 2954.75 669.004 2954.32C669.868 2953.86 670.768 2953.63 671.704 2953.63C672.112 2953.63 672.496 2953.67 672.856 2953.74C673.24 2953.81 673.552 2953.9 673.792 2953.99L672.604 2958.85C672.34 2958.71 672.016 2958.59 671.632 2958.49C671.248 2958.4 670.864 2958.35 670.48 2958.35C669.88 2958.35 669.304 2958.47 668.752 2958.71C668.224 2958.92 667.756 2959.24 667.348 2959.64C666.94 2960.05 666.616 2960.53 666.376 2961.08C666.16 2961.61 666.052 2962.21 666.052 2962.88V2973H661.588ZM679.62 2981.28L683.652 2971.96L683.688 2974.91L674.328 2954.03H679.44L684.66 2966.41C684.828 2966.72 684.996 2967.14 685.164 2967.67C685.332 2968.18 685.476 2968.68 685.596 2969.18L684.696 2969.47C684.864 2969.02 685.044 2968.54 685.236 2968.03C685.428 2967.5 685.608 2966.96 685.776 2966.41L690.24 2954.03H695.388L687.468 2973L684.228 2981.28H679.62ZM709.525 2973V2947.8H713.953L723.133 2962.74L720.541 2962.7L729.829 2947.8H734.041V2973H729.397V2963.53C729.397 2961.37 729.445 2959.43 729.541 2957.7C729.661 2955.97 729.853 2954.26 730.117 2952.55L730.693 2954.1L722.881 2966.16H720.505L712.945 2954.21L713.449 2952.55C713.713 2954.16 713.893 2955.82 713.989 2957.52C714.109 2959.2 714.169 2961.2 714.169 2963.53V2973H709.525ZM748.914 2973.36C746.922 2973.36 745.158 2972.94 743.622 2972.1C742.11 2971.26 740.922 2970.12 740.058 2968.68C739.218 2967.22 738.798 2965.55 738.798 2963.68C738.798 2962.19 739.038 2960.83 739.518 2959.61C739.998 2958.38 740.658 2957.33 741.498 2956.44C742.362 2955.53 743.382 2954.83 744.558 2954.35C745.758 2953.85 747.066 2953.6 748.482 2953.6C749.73 2953.6 750.894 2953.84 751.974 2954.32C753.054 2954.8 753.99 2955.46 754.782 2956.3C755.574 2957.11 756.174 2958.1 756.582 2959.25C757.014 2960.38 757.218 2961.61 757.194 2962.96L757.158 2964.5H741.786L740.958 2961.48H753.45L752.874 2962.09V2961.3C752.802 2960.56 752.562 2959.91 752.154 2959.36C751.746 2958.78 751.218 2958.34 750.57 2958.02C749.946 2957.69 749.25 2957.52 748.482 2957.52C747.306 2957.52 746.31 2957.75 745.494 2958.2C744.702 2958.66 744.102 2959.32 743.694 2960.18C743.286 2961.02 743.082 2962.08 743.082 2963.35C743.082 2964.58 743.334 2965.64 743.838 2966.56C744.366 2967.47 745.098 2968.18 746.034 2968.68C746.994 2969.16 748.11 2969.4 749.382 2969.4C750.27 2969.4 751.086 2969.26 751.83 2968.97C752.574 2968.68 753.378 2968.16 754.242 2967.42L756.438 2970.48C755.79 2971.08 755.046 2971.6 754.206 2972.03C753.39 2972.44 752.526 2972.76 751.614 2973C750.702 2973.24 749.802 2973.36 748.914 2973.36ZM761.043 2973V2954.03H765.399L765.471 2957.84L764.751 2958.13C764.967 2957.51 765.291 2956.93 765.723 2956.4C766.155 2955.85 766.671 2955.38 767.271 2955C767.871 2954.59 768.507 2954.28 769.179 2954.06C769.851 2953.82 770.535 2953.7 771.231 2953.7C772.263 2953.7 773.175 2953.87 773.967 2954.21C774.783 2954.52 775.455 2955.02 775.983 2955.72C776.535 2956.42 776.943 2957.3 777.207 2958.38L776.523 2958.24L776.811 2957.66C777.075 2957.09 777.447 2956.57 777.927 2956.12C778.407 2955.64 778.947 2955.22 779.547 2954.86C780.147 2954.47 780.771 2954.18 781.419 2953.99C782.091 2953.8 782.751 2953.7 783.399 2953.7C784.839 2953.7 786.039 2953.99 786.999 2954.57C787.959 2955.14 788.679 2956.02 789.159 2957.2C789.639 2958.37 789.879 2959.82 789.879 2961.55V2973H785.415V2961.84C785.415 2960.88 785.283 2960.09 785.019 2959.46C784.779 2958.84 784.395 2958.38 783.867 2958.1C783.363 2957.78 782.727 2957.63 781.959 2957.63C781.359 2957.63 780.783 2957.74 780.231 2957.95C779.703 2958.14 779.247 2958.43 778.863 2958.82C778.479 2959.18 778.179 2959.6 777.963 2960.08C777.747 2960.56 777.639 2961.08 777.639 2961.66V2973H773.175V2961.8C773.175 2960.89 773.043 2960.14 772.779 2959.54C772.515 2958.91 772.131 2958.44 771.627 2958.13C771.123 2957.8 770.511 2957.63 769.791 2957.63C769.191 2957.63 768.627 2957.74 768.099 2957.95C767.571 2958.14 767.115 2958.42 766.731 2958.78C766.347 2959.14 766.047 2959.56 765.831 2960.04C765.615 2960.52 765.507 2961.05 765.507 2961.62V2973H761.043ZM805.271 2973.36C804.431 2973.36 803.603 2973.24 802.787 2973C801.995 2972.74 801.275 2972.39 800.627 2971.96C799.979 2971.52 799.439 2971.04 799.007 2970.52C798.575 2969.96 798.287 2969.41 798.143 2968.86L799.187 2968.39L799.079 2972.93H794.795V2946.36H799.223V2958.42L798.431 2958.06C798.551 2957.48 798.815 2956.94 799.223 2956.44C799.655 2955.91 800.183 2955.44 800.807 2955.04C801.431 2954.6 802.115 2954.27 802.859 2954.03C803.603 2953.76 804.359 2953.63 805.127 2953.63C806.831 2953.63 808.331 2954.05 809.627 2954.89C810.947 2955.73 811.979 2956.9 812.723 2958.38C813.491 2959.87 813.875 2961.56 813.875 2963.46C813.875 2965.38 813.503 2967.08 812.759 2968.57C812.015 2970.06 810.983 2971.24 809.663 2972.1C808.367 2972.94 806.903 2973.36 805.271 2973.36ZM804.335 2969.47C805.343 2969.47 806.243 2969.22 807.035 2968.72C807.827 2968.19 808.451 2967.48 808.907 2966.59C809.363 2965.68 809.591 2964.64 809.591 2963.46C809.591 2962.31 809.363 2961.29 808.907 2960.4C808.475 2959.51 807.863 2958.82 807.071 2958.31C806.279 2957.81 805.367 2957.56 804.335 2957.56C803.303 2957.56 802.391 2957.81 801.599 2958.31C800.807 2958.82 800.183 2959.51 799.727 2960.4C799.271 2961.29 799.043 2962.31 799.043 2963.46C799.043 2964.64 799.271 2965.68 799.727 2966.59C800.183 2967.48 800.807 2968.19 801.599 2968.72C802.391 2969.22 803.303 2969.47 804.335 2969.47ZM817.822 2973V2954.03H822.178L822.25 2960.08L821.638 2958.71C821.902 2957.75 822.358 2956.88 823.006 2956.12C823.654 2955.35 824.398 2954.75 825.238 2954.32C826.102 2953.86 827.002 2953.63 827.938 2953.63C828.346 2953.63 828.73 2953.67 829.09 2953.74C829.474 2953.81 829.786 2953.9 830.026 2953.99L828.838 2958.85C828.574 2958.71 828.25 2958.59 827.866 2958.49C827.482 2958.4 827.098 2958.35 826.714 2958.35C826.114 2958.35 825.538 2958.47 824.986 2958.71C824.458 2958.92 823.99 2959.24 823.582 2959.64C823.174 2960.05 822.85 2960.53 822.61 2961.08C822.394 2961.61 822.286 2962.21 822.286 2962.88V2973H817.822ZM839.33 2973.36C837.77 2973.36 836.354 2972.93 835.082 2972.06C833.81 2971.2 832.79 2970.02 832.022 2968.54C831.254 2967.05 830.87 2965.36 830.87 2963.46C830.87 2961.56 831.254 2959.87 832.022 2958.38C832.79 2956.9 833.834 2955.73 835.154 2954.89C836.474 2954.05 837.962 2953.63 839.618 2953.63C840.578 2953.63 841.454 2953.78 842.246 2954.06C843.038 2954.33 843.734 2954.71 844.334 2955.22C844.934 2955.72 845.426 2956.3 845.81 2956.94C846.218 2957.59 846.494 2958.29 846.638 2959.03L845.666 2958.78V2954.03H850.13V2973H845.63V2968.46L846.674 2968.28C846.506 2968.93 846.194 2969.57 845.738 2970.19C845.306 2970.79 844.754 2971.33 844.082 2971.81C843.434 2972.27 842.702 2972.64 841.886 2972.93C841.094 2973.22 840.242 2973.36 839.33 2973.36ZM840.554 2969.44C841.586 2969.44 842.498 2969.18 843.29 2968.68C844.082 2968.18 844.694 2967.48 845.126 2966.59C845.582 2965.68 845.81 2964.64 845.81 2963.46C845.81 2962.31 845.582 2961.29 845.126 2960.4C844.694 2959.51 844.082 2958.82 843.29 2958.31C842.498 2957.81 841.586 2957.56 840.554 2957.56C839.522 2957.56 838.61 2957.81 837.818 2958.31C837.05 2958.82 836.45 2959.51 836.018 2960.4C835.586 2961.29 835.37 2962.31 835.37 2963.46C835.37 2964.64 835.586 2965.68 836.018 2966.59C836.45 2967.48 837.05 2968.18 837.818 2968.68C838.61 2969.18 839.522 2969.44 840.554 2969.44ZM855.264 2973V2954.03H859.584L859.656 2957.92L858.828 2958.35C859.068 2957.48 859.536 2956.7 860.232 2956.01C860.928 2955.29 861.756 2954.71 862.716 2954.28C863.676 2953.85 864.66 2953.63 865.668 2953.63C867.108 2953.63 868.308 2953.92 869.268 2954.5C870.252 2955.07 870.984 2955.94 871.464 2957.09C871.968 2958.24 872.22 2959.68 872.22 2961.41V2973H867.792V2961.73C867.792 2960.77 867.66 2959.98 867.396 2959.36C867.132 2958.71 866.724 2958.24 866.172 2957.95C865.62 2957.64 864.948 2957.5 864.156 2957.52C863.508 2957.52 862.908 2957.63 862.356 2957.84C861.828 2958.04 861.36 2958.32 860.952 2958.71C860.568 2959.07 860.256 2959.49 860.016 2959.97C859.8 2960.45 859.692 2960.98 859.692 2961.55V2973H857.496C857.064 2973 856.656 2973 856.272 2973C855.912 2973 855.576 2973 855.264 2973ZM886.093 2973.36C884.101 2973.36 882.337 2972.94 880.801 2972.1C879.289 2971.26 878.101 2970.12 877.237 2968.68C876.397 2967.22 875.977 2965.55 875.977 2963.68C875.977 2962.19 876.217 2960.83 876.697 2959.61C877.177 2958.38 877.837 2957.33 878.677 2956.44C879.541 2955.53 880.561 2954.83 881.737 2954.35C882.937 2953.85 884.245 2953.6 885.661 2953.6C886.909 2953.6 888.073 2953.84 889.153 2954.32C890.233 2954.8 891.169 2955.46 891.961 2956.3C892.753 2957.11 893.353 2958.1 893.761 2959.25C894.193 2960.38 894.397 2961.61 894.373 2962.96L894.337 2964.5H878.965L878.137 2961.48H890.629L890.053 2962.09V2961.3C889.981 2960.56 889.741 2959.91 889.333 2959.36C888.925 2958.78 888.397 2958.34 887.749 2958.02C887.125 2957.69 886.429 2957.52 885.661 2957.52C884.485 2957.52 883.489 2957.75 882.673 2958.2C881.881 2958.66 881.281 2959.32 880.873 2960.18C880.465 2961.02 880.261 2962.08 880.261 2963.35C880.261 2964.58 880.513 2965.64 881.017 2966.56C881.545 2967.47 882.277 2968.18 883.213 2968.68C884.173 2969.16 885.289 2969.4 886.561 2969.4C887.449 2969.4 888.265 2969.26 889.009 2968.97C889.753 2968.68 890.557 2968.16 891.421 2967.42L893.617 2970.48C892.969 2971.08 892.225 2971.6 891.385 2972.03C890.569 2972.44 889.705 2972.76 888.793 2973C887.881 2973.24 886.981 2973.36 886.093 2973.36Z"
                fill="#F6F6F6"
              />
              <g id="Vector 252" filter="url(#filter4_d_10_1969)">
                <path
                  d="M934 2965C1427.5 2965 1178.28 2054.62 1565 2066.11"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 8">
              <path
                id="Trifurcated Vocal Folds"
                d="M534.424 3145V3124.12H527.224V3119.8H546.52V3124.12H539.104V3145H534.424ZM548.174 3145V3126.03H552.53L552.602 3132.08L551.99 3130.71C552.254 3129.75 552.71 3128.88 553.358 3128.12C554.006 3127.35 554.75 3126.75 555.59 3126.32C556.454 3125.86 557.354 3125.63 558.29 3125.63C558.698 3125.63 559.082 3125.67 559.442 3125.74C559.826 3125.81 560.138 3125.9 560.378 3125.99L559.19 3130.85C558.926 3130.71 558.602 3130.59 558.218 3130.49C557.834 3130.4 557.45 3130.35 557.066 3130.35C556.466 3130.35 555.89 3130.47 555.338 3130.71C554.81 3130.92 554.342 3131.24 553.934 3131.64C553.526 3132.05 553.202 3132.53 552.962 3133.08C552.746 3133.61 552.638 3134.21 552.638 3134.88V3145H548.174ZM563.83 3145V3126.03H568.258V3145H563.83ZM565.99 3122C565.102 3122 564.406 3121.78 563.902 3121.35C563.422 3120.89 563.182 3120.26 563.182 3119.44C563.182 3118.67 563.434 3118.05 563.938 3117.57C564.442 3117.09 565.126 3116.85 565.99 3116.85C566.902 3116.85 567.598 3117.08 568.078 3117.53C568.582 3117.96 568.834 3118.6 568.834 3119.44C568.834 3120.18 568.582 3120.8 568.078 3121.28C567.574 3121.76 566.878 3122 565.99 3122ZM575.601 3145V3124.34C575.601 3123.18 575.853 3122.16 576.357 3121.28C576.861 3120.36 577.557 3119.66 578.445 3119.15C579.333 3118.62 580.365 3118.36 581.541 3118.36C582.357 3118.36 583.113 3118.5 583.809 3118.79C584.505 3119.06 585.093 3119.43 585.573 3119.91L584.205 3123.26C583.893 3122.99 583.557 3122.79 583.197 3122.64C582.861 3122.5 582.537 3122.43 582.225 3122.43C581.745 3122.43 581.337 3122.51 581.001 3122.68C580.689 3122.82 580.449 3123.05 580.281 3123.36C580.137 3123.68 580.065 3124.05 580.065 3124.48V3145H577.833C577.401 3145 576.993 3145 576.609 3145C576.249 3145 575.913 3145 575.601 3145ZM572.649 3130.31V3126.42H584.349V3130.31H572.649ZM594.594 3145.36C593.226 3145.36 592.038 3145.06 591.03 3144.46C590.022 3143.84 589.254 3142.96 588.726 3141.83C588.198 3140.68 587.934 3139.31 587.934 3137.73V3126.03H592.362V3136.79C592.362 3137.8 592.518 3138.66 592.83 3139.38C593.142 3140.08 593.598 3140.62 594.198 3141C594.798 3141.39 595.518 3141.58 596.358 3141.58C596.982 3141.58 597.546 3141.48 598.05 3141.29C598.578 3141.08 599.034 3140.79 599.418 3140.43C599.802 3140.04 600.102 3139.6 600.318 3139.1C600.534 3138.57 600.642 3138 600.642 3137.4V3126.03H605.07V3145H600.75L600.678 3141.04L601.47 3140.61C601.182 3141.52 600.69 3142.34 599.994 3143.06C599.322 3143.75 598.518 3144.32 597.582 3144.75C596.646 3145.16 595.65 3145.36 594.594 3145.36ZM610.26 3145V3126.03H614.616L614.688 3132.08L614.076 3130.71C614.34 3129.75 614.796 3128.88 615.444 3128.12C616.092 3127.35 616.836 3126.75 617.676 3126.32C618.54 3125.86 619.44 3125.63 620.376 3125.63C620.784 3125.63 621.168 3125.67 621.528 3125.74C621.912 3125.81 622.224 3125.9 622.464 3125.99L621.276 3130.85C621.012 3130.71 620.688 3130.59 620.304 3130.49C619.92 3130.4 619.536 3130.35 619.152 3130.35C618.552 3130.35 617.976 3130.47 617.424 3130.71C616.896 3130.92 616.428 3131.24 616.02 3131.64C615.612 3132.05 615.288 3132.53 615.048 3133.08C614.832 3133.61 614.724 3134.21 614.724 3134.88V3145H610.26ZM632.74 3145.36C630.964 3145.36 629.368 3144.93 627.952 3144.06C626.536 3143.2 625.42 3142.02 624.604 3140.54C623.788 3139.05 623.38 3137.37 623.38 3135.5C623.38 3133.62 623.788 3131.94 624.604 3130.46C625.42 3128.97 626.536 3127.79 627.952 3126.93C629.368 3126.06 630.964 3125.63 632.74 3125.63C634.444 3125.63 635.992 3125.96 637.384 3126.6C638.776 3127.25 639.856 3128.15 640.624 3129.3L638.176 3132.26C637.816 3131.75 637.36 3131.3 636.808 3130.89C636.256 3130.48 635.668 3130.16 635.044 3129.92C634.42 3129.68 633.796 3129.56 633.172 3129.56C632.116 3129.56 631.168 3129.82 630.328 3130.35C629.512 3130.85 628.864 3131.56 628.384 3132.47C627.904 3133.36 627.664 3134.37 627.664 3135.5C627.664 3136.62 627.904 3137.63 628.384 3138.52C628.888 3139.41 629.56 3140.12 630.4 3140.64C631.24 3141.17 632.176 3141.44 633.208 3141.44C633.832 3141.44 634.432 3141.34 635.008 3141.15C635.608 3140.93 636.172 3140.63 636.7 3140.25C637.228 3139.86 637.72 3139.38 638.176 3138.81L640.624 3141.8C639.808 3142.85 638.68 3143.72 637.24 3144.39C635.824 3145.04 634.324 3145.36 632.74 3145.36ZM651.174 3145.36C649.614 3145.36 648.198 3144.93 646.926 3144.06C645.654 3143.2 644.634 3142.02 643.866 3140.54C643.098 3139.05 642.714 3137.36 642.714 3135.46C642.714 3133.56 643.098 3131.87 643.866 3130.38C644.634 3128.9 645.678 3127.73 646.998 3126.89C648.318 3126.05 649.806 3125.63 651.462 3125.63C652.422 3125.63 653.298 3125.78 654.09 3126.06C654.882 3126.33 655.578 3126.71 656.178 3127.22C656.778 3127.72 657.27 3128.3 657.654 3128.94C658.062 3129.59 658.338 3130.29 658.482 3131.03L657.51 3130.78V3126.03H661.974V3145H657.474V3140.46L658.518 3140.28C658.35 3140.93 658.038 3141.57 657.582 3142.19C657.15 3142.79 656.598 3143.33 655.926 3143.81C655.278 3144.27 654.546 3144.64 653.73 3144.93C652.938 3145.22 652.086 3145.36 651.174 3145.36ZM652.398 3141.44C653.43 3141.44 654.342 3141.18 655.134 3140.68C655.926 3140.18 656.538 3139.48 656.97 3138.59C657.426 3137.68 657.654 3136.64 657.654 3135.46C657.654 3134.31 657.426 3133.29 656.97 3132.4C656.538 3131.51 655.926 3130.82 655.134 3130.31C654.342 3129.81 653.43 3129.56 652.398 3129.56C651.366 3129.56 650.454 3129.81 649.662 3130.31C648.894 3130.82 648.294 3131.51 647.862 3132.4C647.43 3133.29 647.214 3134.31 647.214 3135.46C647.214 3136.64 647.43 3137.68 647.862 3138.59C648.294 3139.48 648.894 3140.18 649.662 3140.68C650.454 3141.18 651.366 3141.44 652.398 3141.44ZM669.16 3145V3121.2H673.588V3145H669.16ZM665.416 3130.13V3126.03H677.728V3130.13H665.416ZM689.816 3145.36C687.824 3145.36 686.06 3144.94 684.524 3144.1C683.012 3143.26 681.824 3142.12 680.96 3140.68C680.12 3139.22 679.7 3137.55 679.7 3135.68C679.7 3134.19 679.94 3132.83 680.42 3131.61C680.9 3130.38 681.56 3129.33 682.4 3128.44C683.264 3127.53 684.284 3126.83 685.46 3126.35C686.66 3125.85 687.968 3125.6 689.384 3125.6C690.632 3125.6 691.796 3125.84 692.876 3126.32C693.956 3126.8 694.892 3127.46 695.684 3128.3C696.476 3129.11 697.076 3130.1 697.484 3131.25C697.916 3132.38 698.12 3133.61 698.096 3134.96L698.06 3136.5H682.688L681.86 3133.48H694.352L693.776 3134.09V3133.3C693.704 3132.56 693.464 3131.91 693.056 3131.36C692.648 3130.78 692.12 3130.34 691.472 3130.02C690.848 3129.69 690.152 3129.52 689.384 3129.52C688.208 3129.52 687.212 3129.75 686.396 3130.2C685.604 3130.66 685.004 3131.32 684.596 3132.18C684.188 3133.02 683.984 3134.08 683.984 3135.35C683.984 3136.58 684.236 3137.64 684.74 3138.56C685.268 3139.47 686 3140.18 686.936 3140.68C687.896 3141.16 689.012 3141.4 690.284 3141.4C691.172 3141.4 691.988 3141.26 692.732 3140.97C693.476 3140.68 694.28 3140.16 695.144 3139.42L697.34 3142.48C696.692 3143.08 695.948 3143.6 695.108 3144.03C694.292 3144.44 693.428 3144.76 692.516 3145C691.604 3145.24 690.704 3145.36 689.816 3145.36ZM709.65 3145.36C707.97 3145.36 706.458 3144.94 705.114 3144.1C703.794 3143.24 702.738 3142.07 701.946 3140.61C701.178 3139.12 700.794 3137.42 700.794 3135.5C700.794 3133.6 701.178 3131.91 701.946 3130.42C702.714 3128.93 703.758 3127.77 705.078 3126.93C706.422 3126.06 707.934 3125.63 709.614 3125.63C710.526 3125.63 711.402 3125.78 712.242 3126.06C713.106 3126.35 713.874 3126.75 714.546 3127.25C715.218 3127.73 715.746 3128.27 716.13 3128.87C716.538 3129.47 716.766 3130.1 716.814 3130.74L715.626 3130.89V3118.36H720.054V3145H715.77L715.662 3140.54L716.526 3140.61C716.502 3141.21 716.286 3141.78 715.878 3142.34C715.494 3142.89 714.99 3143.39 714.366 3143.85C713.742 3144.3 713.01 3144.68 712.17 3144.96C711.354 3145.23 710.514 3145.36 709.65 3145.36ZM710.514 3141.62C711.546 3141.62 712.458 3141.35 713.25 3140.82C714.042 3140.3 714.654 3139.58 715.086 3138.66C715.542 3137.75 715.77 3136.7 715.77 3135.5C715.77 3134.32 715.542 3133.28 715.086 3132.36C714.654 3131.43 714.042 3130.71 713.25 3130.2C712.458 3129.68 711.546 3129.41 710.514 3129.41C709.482 3129.41 708.57 3129.68 707.778 3130.2C706.986 3130.71 706.362 3131.43 705.906 3132.36C705.474 3133.28 705.258 3134.32 705.258 3135.5C705.258 3136.7 705.474 3137.75 705.906 3138.66C706.362 3139.58 706.986 3140.3 707.778 3140.82C708.57 3141.35 709.482 3141.62 710.514 3141.62ZM743.762 3145L733.682 3119.8H738.794L744.41 3134.24C744.698 3134.98 744.95 3135.65 745.166 3136.25C745.382 3136.83 745.574 3137.36 745.742 3137.84C745.91 3138.32 746.054 3138.78 746.174 3139.24C746.318 3139.7 746.474 3140.18 746.642 3140.68H745.634C745.802 3140.03 745.982 3139.4 746.174 3138.77C746.366 3138.12 746.582 3137.44 746.822 3136.72C747.086 3136 747.398 3135.17 747.758 3134.24L753.014 3119.8H758.162L748.01 3145H743.762ZM767.893 3145.36C765.997 3145.36 764.305 3144.94 762.817 3144.1C761.329 3143.24 760.153 3142.06 759.289 3140.57C758.425 3139.08 757.993 3137.39 757.993 3135.5C757.993 3133.6 758.425 3131.91 759.289 3130.42C760.153 3128.93 761.329 3127.77 762.817 3126.93C764.305 3126.06 765.997 3125.63 767.893 3125.63C769.765 3125.63 771.445 3126.06 772.933 3126.93C774.421 3127.77 775.585 3128.93 776.425 3130.42C777.289 3131.91 777.721 3133.6 777.721 3135.5C777.721 3137.39 777.289 3139.08 776.425 3140.57C775.585 3142.06 774.421 3143.24 772.933 3144.1C771.445 3144.94 769.765 3145.36 767.893 3145.36ZM767.893 3141.44C768.925 3141.44 769.837 3141.17 770.629 3140.64C771.445 3140.12 772.081 3139.41 772.537 3138.52C773.017 3137.63 773.245 3136.62 773.221 3135.5C773.245 3134.34 773.017 3133.32 772.537 3132.44C772.081 3131.55 771.445 3130.85 770.629 3130.35C769.837 3129.82 768.925 3129.56 767.893 3129.56C766.861 3129.56 765.925 3129.82 765.085 3130.35C764.269 3130.85 763.633 3131.56 763.177 3132.47C762.721 3133.36 762.493 3134.37 762.493 3135.5C762.493 3136.62 762.721 3137.63 763.177 3138.52C763.633 3139.41 764.269 3140.12 765.085 3140.64C765.925 3141.17 766.861 3141.44 767.893 3141.44ZM789.818 3145.36C788.042 3145.36 786.446 3144.93 785.03 3144.06C783.614 3143.2 782.498 3142.02 781.682 3140.54C780.866 3139.05 780.458 3137.37 780.458 3135.5C780.458 3133.62 780.866 3131.94 781.682 3130.46C782.498 3128.97 783.614 3127.79 785.03 3126.93C786.446 3126.06 788.042 3125.63 789.818 3125.63C791.522 3125.63 793.07 3125.96 794.462 3126.6C795.854 3127.25 796.934 3128.15 797.702 3129.3L795.254 3132.26C794.894 3131.75 794.438 3131.3 793.886 3130.89C793.334 3130.48 792.746 3130.16 792.122 3129.92C791.498 3129.68 790.874 3129.56 790.25 3129.56C789.194 3129.56 788.246 3129.82 787.406 3130.35C786.59 3130.85 785.942 3131.56 785.462 3132.47C784.982 3133.36 784.742 3134.37 784.742 3135.5C784.742 3136.62 784.982 3137.63 785.462 3138.52C785.966 3139.41 786.638 3140.12 787.478 3140.64C788.318 3141.17 789.254 3141.44 790.286 3141.44C790.91 3141.44 791.51 3141.34 792.086 3141.15C792.686 3140.93 793.25 3140.63 793.778 3140.25C794.306 3139.86 794.798 3139.38 795.254 3138.81L797.702 3141.8C796.886 3142.85 795.758 3143.72 794.318 3144.39C792.902 3145.04 791.402 3145.36 789.818 3145.36ZM808.252 3145.36C806.692 3145.36 805.276 3144.93 804.004 3144.06C802.732 3143.2 801.712 3142.02 800.944 3140.54C800.176 3139.05 799.792 3137.36 799.792 3135.46C799.792 3133.56 800.176 3131.87 800.944 3130.38C801.712 3128.9 802.756 3127.73 804.076 3126.89C805.396 3126.05 806.884 3125.63 808.54 3125.63C809.5 3125.63 810.376 3125.78 811.168 3126.06C811.96 3126.33 812.656 3126.71 813.256 3127.22C813.856 3127.72 814.348 3128.3 814.732 3128.94C815.14 3129.59 815.416 3130.29 815.56 3131.03L814.588 3130.78V3126.03H819.052V3145H814.552V3140.46L815.596 3140.28C815.428 3140.93 815.116 3141.57 814.66 3142.19C814.228 3142.79 813.676 3143.33 813.004 3143.81C812.356 3144.27 811.624 3144.64 810.808 3144.93C810.016 3145.22 809.164 3145.36 808.252 3145.36ZM809.476 3141.44C810.508 3141.44 811.42 3141.18 812.212 3140.68C813.004 3140.18 813.616 3139.48 814.048 3138.59C814.504 3137.68 814.732 3136.64 814.732 3135.46C814.732 3134.31 814.504 3133.29 814.048 3132.4C813.616 3131.51 813.004 3130.82 812.212 3130.31C811.42 3129.81 810.508 3129.56 809.476 3129.56C808.444 3129.56 807.532 3129.81 806.74 3130.31C805.972 3130.82 805.372 3131.51 804.94 3132.4C804.508 3133.29 804.292 3134.31 804.292 3135.46C804.292 3136.64 804.508 3137.68 804.94 3138.59C805.372 3139.48 805.972 3140.18 806.74 3140.68C807.532 3141.18 808.444 3141.44 809.476 3141.44ZM824.222 3145V3118.36H828.686V3145H824.222ZM845.263 3145V3119.8H849.943V3145H845.263ZM847.423 3134.67V3130.42H860.419V3134.67H847.423ZM847.423 3124.12V3119.8H861.967V3124.12H847.423ZM874.522 3145.36C872.626 3145.36 870.934 3144.94 869.446 3144.1C867.958 3143.24 866.782 3142.06 865.918 3140.57C865.054 3139.08 864.622 3137.39 864.622 3135.5C864.622 3133.6 865.054 3131.91 865.918 3130.42C866.782 3128.93 867.958 3127.77 869.446 3126.93C870.934 3126.06 872.626 3125.63 874.522 3125.63C876.394 3125.63 878.074 3126.06 879.562 3126.93C881.05 3127.77 882.214 3128.93 883.054 3130.42C883.918 3131.91 884.35 3133.6 884.35 3135.5C884.35 3137.39 883.918 3139.08 883.054 3140.57C882.214 3142.06 881.05 3143.24 879.562 3144.1C878.074 3144.94 876.394 3145.36 874.522 3145.36ZM874.522 3141.44C875.554 3141.44 876.466 3141.17 877.258 3140.64C878.074 3140.12 878.71 3139.41 879.166 3138.52C879.646 3137.63 879.874 3136.62 879.85 3135.5C879.874 3134.34 879.646 3133.32 879.166 3132.44C878.71 3131.55 878.074 3130.85 877.258 3130.35C876.466 3129.82 875.554 3129.56 874.522 3129.56C873.49 3129.56 872.554 3129.82 871.714 3130.35C870.898 3130.85 870.262 3131.56 869.806 3132.47C869.35 3133.36 869.122 3134.37 869.122 3135.5C869.122 3136.62 869.35 3137.63 869.806 3138.52C870.262 3139.41 870.898 3140.12 871.714 3140.64C872.554 3141.17 873.49 3141.44 874.522 3141.44ZM888.347 3145V3118.36H892.811V3145H888.347ZM905.294 3145.36C903.614 3145.36 902.102 3144.94 900.758 3144.1C899.438 3143.24 898.382 3142.07 897.59 3140.61C896.822 3139.12 896.438 3137.42 896.438 3135.5C896.438 3133.6 896.822 3131.91 897.59 3130.42C898.358 3128.93 899.402 3127.77 900.722 3126.93C902.066 3126.06 903.578 3125.63 905.258 3125.63C906.17 3125.63 907.046 3125.78 907.886 3126.06C908.75 3126.35 909.518 3126.75 910.19 3127.25C910.862 3127.73 911.39 3128.27 911.774 3128.87C912.182 3129.47 912.41 3130.1 912.458 3130.74L911.27 3130.89V3118.36H915.698V3145H911.414L911.306 3140.54L912.17 3140.61C912.146 3141.21 911.93 3141.78 911.522 3142.34C911.138 3142.89 910.634 3143.39 910.01 3143.85C909.386 3144.3 908.654 3144.68 907.814 3144.96C906.998 3145.23 906.158 3145.36 905.294 3145.36ZM906.158 3141.62C907.19 3141.62 908.102 3141.35 908.894 3140.82C909.686 3140.3 910.298 3139.58 910.73 3138.66C911.186 3137.75 911.414 3136.7 911.414 3135.5C911.414 3134.32 911.186 3133.28 910.73 3132.36C910.298 3131.43 909.686 3130.71 908.894 3130.2C908.102 3129.68 907.19 3129.41 906.158 3129.41C905.126 3129.41 904.214 3129.68 903.422 3130.2C902.63 3130.71 902.006 3131.43 901.55 3132.36C901.118 3133.28 900.902 3134.32 900.902 3135.5C900.902 3136.7 901.118 3137.75 901.55 3138.66C902.006 3139.58 902.63 3140.3 903.422 3140.82C904.214 3141.35 905.126 3141.62 906.158 3141.62ZM927.061 3145.36C925.381 3145.36 923.869 3145.08 922.525 3144.53C921.205 3143.96 920.125 3143.14 919.285 3142.08L922.165 3139.6C922.885 3140.42 923.689 3141 924.577 3141.36C925.465 3141.72 926.401 3141.9 927.385 3141.9C927.793 3141.9 928.153 3141.86 928.465 3141.76C928.801 3141.66 929.089 3141.52 929.329 3141.33C929.569 3141.14 929.749 3140.92 929.869 3140.68C930.013 3140.42 930.085 3140.13 930.085 3139.82C930.085 3139.24 929.869 3138.78 929.437 3138.45C929.197 3138.28 928.813 3138.1 928.285 3137.91C927.781 3137.72 927.121 3137.52 926.305 3137.33C925.009 3137 923.929 3136.61 923.065 3136.18C922.201 3135.72 921.529 3135.22 921.049 3134.67C920.641 3134.21 920.329 3133.7 920.113 3133.12C919.921 3132.54 919.825 3131.92 919.825 3131.25C919.825 3130.41 920.005 3129.65 920.365 3128.98C920.749 3128.28 921.265 3127.68 921.913 3127.18C922.561 3126.68 923.317 3126.29 924.181 3126.03C925.045 3125.76 925.945 3125.63 926.881 3125.63C927.841 3125.63 928.765 3125.75 929.653 3125.99C930.565 3126.23 931.405 3126.58 932.173 3127.04C932.965 3127.47 933.637 3128 934.189 3128.62L931.741 3131.32C931.285 3130.89 930.781 3130.5 930.229 3130.17C929.701 3129.83 929.161 3129.57 928.609 3129.38C928.057 3129.16 927.541 3129.05 927.061 3129.05C926.605 3129.05 926.197 3129.1 925.837 3129.2C925.477 3129.27 925.177 3129.39 924.937 3129.56C924.697 3129.72 924.505 3129.94 924.361 3130.2C924.241 3130.44 924.181 3130.73 924.181 3131.07C924.205 3131.36 924.277 3131.63 924.397 3131.9C924.541 3132.14 924.733 3132.34 924.973 3132.51C925.237 3132.68 925.633 3132.87 926.161 3133.08C926.689 3133.3 927.373 3133.5 928.213 3133.7C929.389 3134.01 930.373 3134.36 931.165 3134.74C931.957 3135.12 932.581 3135.57 933.037 3136.07C933.493 3136.5 933.817 3137.01 934.009 3137.58C934.201 3138.16 934.297 3138.8 934.297 3139.49C934.297 3140.62 933.973 3141.63 933.325 3142.52C932.701 3143.4 931.837 3144.1 930.733 3144.6C929.653 3145.11 928.429 3145.36 927.061 3145.36Z"
                fill="#F6F6F6"
              />
              <g id="Vector 262" filter="url(#filter5_d_10_1969)">
                <path
                  d="M965 3135C1284 3134.88 1205.02 3086.39 1585 3087.01"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 6">
              <path
                id="Elastigon_2"
                d="M529.384 2798V2772.8H545.872V2777.05H533.992V2793.75H546.016V2798H529.384ZM531.544 2787.2V2783.02H544.036V2787.2H531.544ZM551.128 2798V2771.36H555.592V2798H551.128ZM567.608 2798.36C566.048 2798.36 564.632 2797.93 563.36 2797.06C562.088 2796.2 561.068 2795.02 560.3 2793.54C559.532 2792.05 559.148 2790.36 559.148 2788.46C559.148 2786.56 559.532 2784.87 560.3 2783.38C561.068 2781.9 562.112 2780.73 563.432 2779.89C564.752 2779.05 566.24 2778.63 567.896 2778.63C568.856 2778.63 569.732 2778.78 570.524 2779.06C571.316 2779.33 572.012 2779.71 572.612 2780.22C573.212 2780.72 573.704 2781.3 574.088 2781.94C574.496 2782.59 574.772 2783.29 574.916 2784.03L573.944 2783.78V2779.03H578.408V2798H573.908V2793.46L574.952 2793.28C574.784 2793.93 574.472 2794.57 574.016 2795.19C573.584 2795.79 573.032 2796.33 572.36 2796.81C571.712 2797.27 570.98 2797.64 570.164 2797.93C569.372 2798.22 568.52 2798.36 567.608 2798.36ZM568.832 2794.44C569.864 2794.44 570.776 2794.18 571.568 2793.68C572.36 2793.18 572.972 2792.48 573.404 2791.59C573.86 2790.68 574.088 2789.64 574.088 2788.46C574.088 2787.31 573.86 2786.29 573.404 2785.4C572.972 2784.51 572.36 2783.82 571.568 2783.31C570.776 2782.81 569.864 2782.56 568.832 2782.56C567.8 2782.56 566.888 2782.81 566.096 2783.31C565.328 2783.82 564.728 2784.51 564.296 2785.4C563.864 2786.29 563.648 2787.31 563.648 2788.46C563.648 2789.64 563.864 2790.68 564.296 2791.59C564.728 2792.48 565.328 2793.18 566.096 2793.68C566.888 2794.18 567.8 2794.44 568.832 2794.44ZM589.877 2798.36C588.197 2798.36 586.685 2798.08 585.341 2797.53C584.021 2796.96 582.941 2796.14 582.101 2795.08L584.981 2792.6C585.701 2793.42 586.505 2794 587.393 2794.36C588.281 2794.72 589.217 2794.9 590.201 2794.9C590.609 2794.9 590.969 2794.86 591.281 2794.76C591.617 2794.66 591.905 2794.52 592.145 2794.33C592.385 2794.14 592.565 2793.92 592.685 2793.68C592.829 2793.42 592.901 2793.13 592.901 2792.82C592.901 2792.24 592.685 2791.78 592.253 2791.45C592.013 2791.28 591.629 2791.1 591.101 2790.91C590.597 2790.72 589.937 2790.52 589.121 2790.33C587.825 2790 586.745 2789.61 585.881 2789.18C585.017 2788.72 584.345 2788.22 583.865 2787.67C583.457 2787.21 583.145 2786.7 582.929 2786.12C582.737 2785.54 582.641 2784.92 582.641 2784.25C582.641 2783.41 582.821 2782.65 583.181 2781.98C583.565 2781.28 584.081 2780.68 584.729 2780.18C585.377 2779.68 586.133 2779.29 586.997 2779.03C587.861 2778.76 588.761 2778.63 589.697 2778.63C590.657 2778.63 591.581 2778.75 592.469 2778.99C593.381 2779.23 594.221 2779.58 594.989 2780.04C595.781 2780.47 596.453 2781 597.005 2781.62L594.557 2784.32C594.101 2783.89 593.597 2783.5 593.045 2783.17C592.517 2782.83 591.977 2782.57 591.425 2782.38C590.873 2782.16 590.357 2782.05 589.877 2782.05C589.421 2782.05 589.013 2782.1 588.653 2782.2C588.293 2782.27 587.993 2782.39 587.753 2782.56C587.513 2782.72 587.321 2782.94 587.177 2783.2C587.057 2783.44 586.997 2783.73 586.997 2784.07C587.021 2784.36 587.093 2784.63 587.213 2784.9C587.357 2785.14 587.549 2785.34 587.789 2785.51C588.053 2785.68 588.449 2785.87 588.977 2786.08C589.505 2786.3 590.189 2786.5 591.029 2786.7C592.205 2787.01 593.189 2787.36 593.981 2787.74C594.773 2788.12 595.397 2788.57 595.853 2789.07C596.309 2789.5 596.633 2790.01 596.825 2790.58C597.017 2791.16 597.113 2791.8 597.113 2792.49C597.113 2793.62 596.789 2794.63 596.141 2795.52C595.517 2796.4 594.653 2797.1 593.549 2797.6C592.469 2798.11 591.245 2798.36 589.877 2798.36ZM603.066 2798V2774.2H607.494V2798H603.066ZM599.322 2783.13V2779.03H611.634V2783.13H599.322ZM615.51 2798V2779.03H619.938V2798H615.51ZM617.67 2775C616.782 2775 616.086 2774.78 615.582 2774.35C615.102 2773.89 614.862 2773.26 614.862 2772.44C614.862 2771.67 615.114 2771.05 615.618 2770.57C616.122 2770.09 616.806 2769.85 617.67 2769.85C618.582 2769.85 619.278 2770.08 619.758 2770.53C620.262 2770.96 620.514 2771.6 620.514 2772.44C620.514 2773.18 620.262 2773.8 619.758 2774.28C619.254 2774.76 618.558 2775 617.67 2775ZM634.085 2806.28C632.669 2806.28 631.253 2806.06 629.837 2805.63C628.445 2805.2 627.317 2804.64 626.453 2803.94L628.037 2800.66C628.541 2801.02 629.105 2801.34 629.729 2801.6C630.353 2801.86 631.013 2802.07 631.709 2802.21C632.429 2802.36 633.137 2802.43 633.833 2802.43C635.105 2802.43 636.161 2802.22 637.001 2801.82C637.865 2801.43 638.513 2800.83 638.945 2800.02C639.377 2799.22 639.593 2798.23 639.593 2797.03V2793.54L640.241 2793.79C640.097 2794.53 639.701 2795.24 639.053 2795.91C638.405 2796.58 637.589 2797.14 636.605 2797.57C635.621 2797.98 634.613 2798.18 633.581 2798.18C631.781 2798.18 630.185 2797.76 628.793 2796.92C627.425 2796.08 626.333 2794.94 625.517 2793.5C624.725 2792.04 624.329 2790.36 624.329 2788.46C624.329 2786.56 624.725 2784.88 625.517 2783.42C626.309 2781.93 627.389 2780.77 628.757 2779.93C630.149 2779.06 631.709 2778.63 633.437 2778.63C634.157 2778.63 634.853 2778.72 635.525 2778.88C636.197 2779.05 636.809 2779.29 637.361 2779.6C637.937 2779.92 638.453 2780.26 638.909 2780.65C639.365 2781.03 639.737 2781.44 640.025 2781.87C640.313 2782.3 640.493 2782.72 640.565 2783.13L639.629 2783.42L639.701 2779.03H644.057V2796.7C644.057 2798.24 643.829 2799.6 643.373 2800.77C642.917 2801.95 642.257 2802.94 641.393 2803.76C640.529 2804.6 639.485 2805.22 638.261 2805.63C637.037 2806.06 635.645 2806.28 634.085 2806.28ZM634.265 2794.4C635.345 2794.4 636.293 2794.15 637.109 2793.64C637.949 2793.14 638.597 2792.44 639.053 2791.56C639.509 2790.67 639.737 2789.65 639.737 2788.5C639.737 2787.32 639.497 2786.29 639.017 2785.4C638.561 2784.49 637.925 2783.78 637.109 2783.28C636.293 2782.77 635.345 2782.52 634.265 2782.52C633.185 2782.52 632.237 2782.78 631.421 2783.31C630.605 2783.82 629.957 2784.52 629.477 2785.44C629.021 2786.32 628.793 2787.34 628.793 2788.5C628.793 2789.62 629.021 2790.64 629.477 2791.56C629.957 2792.44 630.605 2793.14 631.421 2793.64C632.237 2794.15 633.185 2794.4 634.265 2794.4ZM657.854 2798.36C655.958 2798.36 654.266 2797.94 652.778 2797.1C651.29 2796.24 650.114 2795.06 649.25 2793.57C648.386 2792.08 647.954 2790.39 647.954 2788.5C647.954 2786.6 648.386 2784.91 649.25 2783.42C650.114 2781.93 651.29 2780.77 652.778 2779.93C654.266 2779.06 655.958 2778.63 657.854 2778.63C659.726 2778.63 661.406 2779.06 662.894 2779.93C664.382 2780.77 665.546 2781.93 666.386 2783.42C667.25 2784.91 667.682 2786.6 667.682 2788.5C667.682 2790.39 667.25 2792.08 666.386 2793.57C665.546 2795.06 664.382 2796.24 662.894 2797.1C661.406 2797.94 659.726 2798.36 657.854 2798.36ZM657.854 2794.44C658.886 2794.44 659.798 2794.17 660.59 2793.64C661.406 2793.12 662.042 2792.41 662.498 2791.52C662.978 2790.63 663.206 2789.62 663.182 2788.5C663.206 2787.34 662.978 2786.32 662.498 2785.44C662.042 2784.55 661.406 2783.85 660.59 2783.35C659.798 2782.82 658.886 2782.56 657.854 2782.56C656.822 2782.56 655.886 2782.82 655.046 2783.35C654.23 2783.85 653.594 2784.56 653.138 2785.47C652.682 2786.36 652.454 2787.37 652.454 2788.5C652.454 2789.62 652.682 2790.63 653.138 2791.52C653.594 2792.41 654.23 2793.12 655.046 2793.64C655.886 2794.17 656.822 2794.44 657.854 2794.44ZM671.643 2798V2779.03H675.963L676.035 2782.92L675.207 2783.35C675.447 2782.48 675.915 2781.7 676.611 2781.01C677.307 2780.29 678.135 2779.71 679.095 2779.28C680.055 2778.85 681.039 2778.63 682.047 2778.63C683.487 2778.63 684.687 2778.92 685.647 2779.5C686.631 2780.07 687.363 2780.94 687.843 2782.09C688.347 2783.24 688.599 2784.68 688.599 2786.41V2798H684.171V2786.73C684.171 2785.77 684.039 2784.98 683.775 2784.36C683.511 2783.71 683.103 2783.24 682.551 2782.95C681.999 2782.64 681.327 2782.5 680.535 2782.52C679.887 2782.52 679.287 2782.63 678.735 2782.84C678.207 2783.04 677.739 2783.32 677.331 2783.71C676.947 2784.07 676.635 2784.49 676.395 2784.97C676.179 2785.45 676.071 2785.98 676.071 2786.55V2798H673.875C673.443 2798 673.035 2798 672.651 2798C672.291 2798 671.955 2798 671.643 2798Z"
                fill="#F6F6F6"
              />
              <g id="Vector 253" filter="url(#filter6_d_10_1969)">
                <path
                  d="M726 2787C1393.81 2787 1095.71 1854.34 1681 1866.11"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 2">
              <path
                id="Dentiform Projection"
                d="M31.841 1526V1500.8H41.957C43.781 1500.8 45.425 1501.1 46.889 1501.7C48.377 1502.3 49.649 1503.16 50.705 1504.29C51.785 1505.42 52.601 1506.75 53.153 1508.29C53.729 1509.82 54.017 1511.53 54.017 1513.4C54.017 1515.27 53.729 1516.99 53.153 1518.55C52.601 1520.08 51.797 1521.42 50.741 1522.54C49.685 1523.65 48.413 1524.5 46.925 1525.1C45.437 1525.7 43.781 1526 41.957 1526H31.841ZM36.521 1522.36L36.161 1521.68H41.777C42.953 1521.68 43.997 1521.49 44.909 1521.1C45.845 1520.72 46.637 1520.17 47.285 1519.45C47.933 1518.73 48.425 1517.86 48.761 1516.86C49.097 1515.82 49.265 1514.67 49.265 1513.4C49.265 1512.13 49.097 1510.99 48.761 1509.98C48.425 1508.95 47.921 1508.07 47.249 1507.35C46.601 1506.63 45.821 1506.08 44.909 1505.7C43.997 1505.31 42.953 1505.12 41.777 1505.12H36.053L36.521 1504.51V1522.36ZM67.1871 1526.36C65.1951 1526.36 63.4311 1525.94 61.8951 1525.1C60.3831 1524.26 59.1951 1523.12 58.3311 1521.68C57.4911 1520.22 57.0711 1518.55 57.0711 1516.68C57.0711 1515.19 57.3111 1513.83 57.7911 1512.61C58.2711 1511.38 58.9311 1510.33 59.7711 1509.44C60.6351 1508.53 61.6551 1507.83 62.8311 1507.35C64.0311 1506.85 65.3391 1506.6 66.7551 1506.6C68.0031 1506.6 69.1671 1506.84 70.2471 1507.32C71.3271 1507.8 72.2631 1508.46 73.0551 1509.3C73.8471 1510.11 74.4471 1511.1 74.8551 1512.25C75.2871 1513.38 75.4911 1514.61 75.4671 1515.96L75.4311 1517.5H60.0591L59.2311 1514.48H71.7231L71.1471 1515.09V1514.3C71.0751 1513.56 70.8351 1512.91 70.4271 1512.36C70.0191 1511.78 69.4911 1511.34 68.8431 1511.02C68.2191 1510.69 67.5231 1510.52 66.7551 1510.52C65.5791 1510.52 64.5831 1510.75 63.7671 1511.2C62.9751 1511.66 62.3751 1512.32 61.9671 1513.18C61.5591 1514.02 61.3551 1515.08 61.3551 1516.35C61.3551 1517.58 61.6071 1518.64 62.1111 1519.56C62.6391 1520.47 63.3711 1521.18 64.3071 1521.68C65.2671 1522.16 66.3831 1522.4 67.6551 1522.4C68.5431 1522.4 69.3591 1522.26 70.1031 1521.97C70.8471 1521.68 71.6511 1521.16 72.5151 1520.42L74.7111 1523.48C74.0631 1524.08 73.3191 1524.6 72.4791 1525.03C71.6631 1525.44 70.7991 1525.76 69.8871 1526C68.9751 1526.24 68.0751 1526.36 67.1871 1526.36ZM79.3889 1526V1507.03H83.7089L83.7809 1510.92L82.9529 1511.35C83.1929 1510.48 83.6609 1509.7 84.3569 1509.01C85.0529 1508.29 85.8809 1507.71 86.8409 1507.28C87.8009 1506.85 88.7849 1506.63 89.7929 1506.63C91.2329 1506.63 92.4329 1506.92 93.3929 1507.5C94.3769 1508.07 95.1089 1508.94 95.5889 1510.09C96.0929 1511.24 96.3449 1512.68 96.3449 1514.41V1526H91.9169V1514.73C91.9169 1513.77 91.7849 1512.98 91.5209 1512.36C91.2569 1511.71 90.8489 1511.24 90.2969 1510.95C89.7449 1510.64 89.0729 1510.5 88.2809 1510.52C87.6329 1510.52 87.0329 1510.63 86.4809 1510.84C85.9529 1511.04 85.4849 1511.32 85.0769 1511.71C84.6929 1512.07 84.3809 1512.49 84.1409 1512.97C83.9249 1513.45 83.8169 1513.98 83.8169 1514.55V1526H81.6209C81.1889 1526 80.7809 1526 80.3969 1526C80.0369 1526 79.7009 1526 79.3889 1526ZM103.378 1526V1502.2H107.806V1526H103.378ZM99.6344 1511.13V1507.03H111.946V1511.13H99.6344ZM115.823 1526V1507.03H120.251V1526H115.823ZM117.983 1503C117.095 1503 116.399 1502.78 115.895 1502.35C115.415 1501.89 115.175 1501.26 115.175 1500.44C115.175 1499.67 115.427 1499.05 115.931 1498.57C116.435 1498.09 117.119 1497.85 117.983 1497.85C118.895 1497.85 119.591 1498.08 120.071 1498.53C120.575 1498.96 120.827 1499.6 120.827 1500.44C120.827 1501.18 120.575 1501.8 120.071 1502.28C119.567 1502.76 118.871 1503 117.983 1503ZM127.593 1526V1505.34C127.593 1504.18 127.845 1503.16 128.349 1502.28C128.853 1501.36 129.549 1500.66 130.437 1500.15C131.325 1499.62 132.357 1499.36 133.533 1499.36C134.349 1499.36 135.105 1499.5 135.801 1499.79C136.497 1500.06 137.085 1500.43 137.565 1500.91L136.197 1504.26C135.885 1503.99 135.549 1503.79 135.189 1503.64C134.853 1503.5 134.529 1503.43 134.217 1503.43C133.737 1503.43 133.329 1503.51 132.993 1503.68C132.681 1503.82 132.441 1504.05 132.273 1504.36C132.129 1504.68 132.057 1505.05 132.057 1505.48V1526H129.825C129.393 1526 128.985 1526 128.601 1526C128.241 1526 127.905 1526 127.593 1526ZM124.641 1511.31V1507.42H136.341V1511.31H124.641ZM147.971 1526.36C146.075 1526.36 144.383 1525.94 142.895 1525.1C141.407 1524.24 140.231 1523.06 139.367 1521.57C138.503 1520.08 138.071 1518.39 138.071 1516.5C138.071 1514.6 138.503 1512.91 139.367 1511.42C140.231 1509.93 141.407 1508.77 142.895 1507.93C144.383 1507.06 146.075 1506.63 147.971 1506.63C149.843 1506.63 151.523 1507.06 153.011 1507.93C154.499 1508.77 155.663 1509.93 156.503 1511.42C157.367 1512.91 157.799 1514.6 157.799 1516.5C157.799 1518.39 157.367 1520.08 156.503 1521.57C155.663 1523.06 154.499 1524.24 153.011 1525.1C151.523 1525.94 149.843 1526.36 147.971 1526.36ZM147.971 1522.44C149.003 1522.44 149.915 1522.17 150.707 1521.64C151.523 1521.12 152.159 1520.41 152.615 1519.52C153.095 1518.63 153.323 1517.62 153.299 1516.5C153.323 1515.34 153.095 1514.32 152.615 1513.44C152.159 1512.55 151.523 1511.85 150.707 1511.35C149.915 1510.82 149.003 1510.56 147.971 1510.56C146.939 1510.56 146.003 1510.82 145.163 1511.35C144.347 1511.85 143.711 1512.56 143.255 1513.47C142.799 1514.36 142.571 1515.37 142.571 1516.5C142.571 1517.62 142.799 1518.63 143.255 1519.52C143.711 1520.41 144.347 1521.12 145.163 1521.64C146.003 1522.17 146.939 1522.44 147.971 1522.44ZM161.76 1526V1507.03H166.116L166.188 1513.08L165.576 1511.71C165.84 1510.75 166.296 1509.88 166.944 1509.12C167.592 1508.35 168.336 1507.75 169.176 1507.32C170.04 1506.86 170.94 1506.63 171.876 1506.63C172.284 1506.63 172.668 1506.67 173.028 1506.74C173.412 1506.81 173.724 1506.9 173.964 1506.99L172.776 1511.85C172.512 1511.71 172.188 1511.59 171.804 1511.49C171.42 1511.4 171.036 1511.35 170.652 1511.35C170.052 1511.35 169.476 1511.47 168.924 1511.71C168.396 1511.92 167.928 1512.24 167.52 1512.64C167.112 1513.05 166.788 1513.53 166.548 1514.08C166.332 1514.61 166.224 1515.21 166.224 1515.88V1526H161.76ZM176.84 1526V1507.03H181.196L181.268 1510.84L180.548 1511.13C180.764 1510.51 181.088 1509.93 181.52 1509.4C181.952 1508.85 182.468 1508.38 183.068 1508C183.668 1507.59 184.304 1507.28 184.976 1507.06C185.648 1506.82 186.332 1506.7 187.028 1506.7C188.06 1506.7 188.972 1506.87 189.764 1507.21C190.58 1507.52 191.252 1508.02 191.78 1508.72C192.332 1509.42 192.74 1510.3 193.004 1511.38L192.32 1511.24L192.608 1510.66C192.872 1510.09 193.244 1509.57 193.724 1509.12C194.204 1508.64 194.744 1508.22 195.344 1507.86C195.944 1507.47 196.568 1507.18 197.216 1506.99C197.888 1506.8 198.548 1506.7 199.196 1506.7C200.636 1506.7 201.836 1506.99 202.796 1507.57C203.756 1508.14 204.476 1509.02 204.956 1510.2C205.436 1511.37 205.676 1512.82 205.676 1514.55V1526H201.212V1514.84C201.212 1513.88 201.08 1513.09 200.816 1512.46C200.576 1511.84 200.192 1511.38 199.664 1511.1C199.16 1510.78 198.524 1510.63 197.756 1510.63C197.156 1510.63 196.58 1510.74 196.028 1510.95C195.5 1511.14 195.044 1511.43 194.66 1511.82C194.276 1512.18 193.976 1512.6 193.76 1513.08C193.544 1513.56 193.436 1514.08 193.436 1514.66V1526H188.972V1514.8C188.972 1513.89 188.84 1513.14 188.576 1512.54C188.312 1511.91 187.928 1511.44 187.424 1511.13C186.92 1510.8 186.308 1510.63 185.588 1510.63C184.988 1510.63 184.424 1510.74 183.896 1510.95C183.368 1511.14 182.912 1511.42 182.528 1511.78C182.144 1512.14 181.844 1512.56 181.628 1513.04C181.412 1513.52 181.304 1514.05 181.304 1514.62V1526H176.84ZM31.7707 1571V1545.8H42.2467C43.6867 1545.8 44.9827 1546.15 46.1347 1546.84C47.3107 1547.54 48.2467 1548.49 48.9427 1549.69C49.6387 1550.89 49.9867 1552.23 49.9867 1553.72C49.9867 1555.23 49.6387 1556.6 48.9427 1557.82C48.2467 1559.02 47.3107 1559.98 46.1347 1560.7C44.9827 1561.42 43.6867 1561.78 42.2467 1561.78H36.4507V1571H31.7707ZM36.4507 1557.46H41.9227C42.5227 1557.46 43.0627 1557.3 43.5427 1556.96C44.0467 1556.62 44.4427 1556.18 44.7307 1555.63C45.0427 1555.08 45.1987 1554.45 45.1987 1553.76C45.1987 1553.06 45.0427 1552.45 44.7307 1551.92C44.4427 1551.37 44.0467 1550.94 43.5427 1550.62C43.0627 1550.29 42.5227 1550.12 41.9227 1550.12H36.4507V1557.46ZM54.1467 1571V1552.03H58.5027L58.5747 1558.08L57.9627 1556.71C58.2267 1555.75 58.6827 1554.88 59.3307 1554.12C59.9787 1553.35 60.7227 1552.75 61.5627 1552.32C62.4267 1551.86 63.3267 1551.63 64.2627 1551.63C64.6707 1551.63 65.0547 1551.67 65.4147 1551.74C65.7987 1551.81 66.1107 1551.9 66.3507 1551.99L65.1627 1556.85C64.8987 1556.71 64.5747 1556.59 64.1907 1556.49C63.8067 1556.4 63.4227 1556.35 63.0387 1556.35C62.4387 1556.35 61.8627 1556.47 61.3107 1556.71C60.7827 1556.92 60.3147 1557.24 59.9067 1557.64C59.4987 1558.05 59.1747 1558.53 58.9347 1559.08C58.7187 1559.61 58.6107 1560.21 58.6107 1560.88V1571H54.1467ZM77.1664 1571.36C75.2704 1571.36 73.5784 1570.94 72.0904 1570.1C70.6024 1569.24 69.4264 1568.06 68.5624 1566.57C67.6984 1565.08 67.2664 1563.39 67.2664 1561.5C67.2664 1559.6 67.6984 1557.91 68.5624 1556.42C69.4264 1554.93 70.6024 1553.77 72.0904 1552.93C73.5784 1552.06 75.2704 1551.63 77.1664 1551.63C79.0384 1551.63 80.7184 1552.06 82.2064 1552.93C83.6944 1553.77 84.8584 1554.93 85.6984 1556.42C86.5624 1557.91 86.9944 1559.6 86.9944 1561.5C86.9944 1563.39 86.5624 1565.08 85.6984 1566.57C84.8584 1568.06 83.6944 1569.24 82.2064 1570.1C80.7184 1570.94 79.0384 1571.36 77.1664 1571.36ZM77.1664 1567.44C78.1984 1567.44 79.1104 1567.17 79.9024 1566.64C80.7184 1566.12 81.3544 1565.41 81.8104 1564.52C82.2904 1563.63 82.5184 1562.62 82.4944 1561.5C82.5184 1560.34 82.2904 1559.32 81.8104 1558.44C81.3544 1557.55 80.7184 1556.85 79.9024 1556.35C79.1104 1555.82 78.1984 1555.56 77.1664 1555.56C76.1344 1555.56 75.1984 1555.82 74.3584 1556.35C73.5424 1556.85 72.9064 1557.56 72.4504 1558.47C71.9944 1559.36 71.7664 1560.37 71.7664 1561.5C71.7664 1562.62 71.9944 1563.63 72.4504 1564.52C72.9064 1565.41 73.5424 1566.12 74.3584 1566.64C75.1984 1567.17 76.1344 1567.44 77.1664 1567.44ZM88.8673 1578.24L87.1753 1574.85C88.1833 1574.85 88.9873 1574.7 89.5873 1574.38C90.2113 1574.07 90.6673 1573.59 90.9553 1572.94C91.2673 1572.3 91.4233 1571.47 91.4233 1570.46V1552.03H95.8513V1571.5C95.8513 1572.92 95.5633 1574.13 94.9873 1575.14C94.4353 1576.15 93.6313 1576.92 92.5753 1577.44C91.5433 1577.97 90.3073 1578.24 88.8673 1578.24ZM93.7273 1548C92.8153 1548 92.1073 1547.78 91.6033 1547.35C91.1233 1546.89 90.8833 1546.26 90.8833 1545.44C90.8833 1544.67 91.1353 1544.05 91.6393 1543.57C92.1433 1543.09 92.8393 1542.85 93.7273 1542.85C94.6153 1542.85 95.2993 1543.08 95.7793 1543.53C96.2833 1543.96 96.5353 1544.6 96.5353 1545.44C96.5353 1546.18 96.2833 1546.8 95.7793 1547.28C95.2753 1547.76 94.5913 1548 93.7273 1548ZM110.043 1571.36C108.051 1571.36 106.287 1570.94 104.751 1570.1C103.239 1569.26 102.051 1568.12 101.187 1566.68C100.347 1565.22 99.9266 1563.55 99.9266 1561.68C99.9266 1560.19 100.167 1558.83 100.647 1557.61C101.127 1556.38 101.787 1555.33 102.627 1554.44C103.491 1553.53 104.511 1552.83 105.687 1552.35C106.887 1551.85 108.195 1551.6 109.611 1551.6C110.859 1551.6 112.023 1551.84 113.103 1552.32C114.183 1552.8 115.119 1553.46 115.911 1554.3C116.703 1555.11 117.303 1556.1 117.711 1557.25C118.143 1558.38 118.347 1559.61 118.323 1560.96L118.287 1562.5H102.915L102.087 1559.48H114.579L114.003 1560.09V1559.3C113.931 1558.56 113.691 1557.91 113.283 1557.36C112.875 1556.78 112.347 1556.34 111.699 1556.02C111.075 1555.69 110.379 1555.52 109.611 1555.52C108.435 1555.52 107.439 1555.75 106.623 1556.2C105.831 1556.66 105.231 1557.32 104.823 1558.18C104.415 1559.02 104.211 1560.08 104.211 1561.35C104.211 1562.58 104.463 1563.64 104.967 1564.56C105.495 1565.47 106.227 1566.18 107.163 1566.68C108.123 1567.16 109.239 1567.4 110.511 1567.4C111.399 1567.4 112.215 1567.26 112.959 1566.97C113.703 1566.68 114.507 1566.16 115.371 1565.42L117.567 1568.48C116.919 1569.08 116.175 1569.6 115.335 1570.03C114.519 1570.44 113.655 1570.76 112.743 1571C111.831 1571.24 110.931 1571.36 110.043 1571.36ZM130.38 1571.36C128.604 1571.36 127.008 1570.93 125.592 1570.06C124.176 1569.2 123.06 1568.02 122.244 1566.54C121.428 1565.05 121.02 1563.37 121.02 1561.5C121.02 1559.62 121.428 1557.94 122.244 1556.46C123.06 1554.97 124.176 1553.79 125.592 1552.93C127.008 1552.06 128.604 1551.63 130.38 1551.63C132.084 1551.63 133.632 1551.96 135.024 1552.6C136.416 1553.25 137.496 1554.15 138.264 1555.3L135.816 1558.26C135.456 1557.75 135 1557.3 134.448 1556.89C133.896 1556.48 133.308 1556.16 132.684 1555.92C132.06 1555.68 131.436 1555.56 130.812 1555.56C129.756 1555.56 128.808 1555.82 127.968 1556.35C127.152 1556.85 126.504 1557.56 126.024 1558.47C125.544 1559.36 125.304 1560.37 125.304 1561.5C125.304 1562.62 125.544 1563.63 126.024 1564.52C126.528 1565.41 127.2 1566.12 128.04 1566.64C128.88 1567.17 129.816 1567.44 130.848 1567.44C131.472 1567.44 132.072 1567.34 132.648 1567.15C133.248 1566.93 133.812 1566.63 134.34 1566.25C134.868 1565.86 135.36 1565.38 135.816 1564.81L138.264 1567.8C137.448 1568.85 136.32 1569.72 134.88 1570.39C133.464 1571.04 131.964 1571.36 130.38 1571.36ZM143.703 1571V1547.2H148.131V1571H143.703ZM139.959 1556.13V1552.03H152.271V1556.13H139.959ZM156.147 1571V1552.03H160.575V1571H156.147ZM158.307 1548C157.419 1548 156.723 1547.78 156.219 1547.35C155.739 1546.89 155.499 1546.26 155.499 1545.44C155.499 1544.67 155.751 1544.05 156.255 1543.57C156.759 1543.09 157.443 1542.85 158.307 1542.85C159.219 1542.85 159.915 1543.08 160.395 1543.53C160.899 1543.96 161.151 1544.6 161.151 1545.44C161.151 1546.18 160.899 1546.8 160.395 1547.28C159.891 1547.76 159.195 1548 158.307 1548ZM174.866 1571.36C172.97 1571.36 171.278 1570.94 169.79 1570.1C168.302 1569.24 167.126 1568.06 166.262 1566.57C165.398 1565.08 164.966 1563.39 164.966 1561.5C164.966 1559.6 165.398 1557.91 166.262 1556.42C167.126 1554.93 168.302 1553.77 169.79 1552.93C171.278 1552.06 172.97 1551.63 174.866 1551.63C176.738 1551.63 178.418 1552.06 179.906 1552.93C181.394 1553.77 182.558 1554.93 183.398 1556.42C184.262 1557.91 184.694 1559.6 184.694 1561.5C184.694 1563.39 184.262 1565.08 183.398 1566.57C182.558 1568.06 181.394 1569.24 179.906 1570.1C178.418 1570.94 176.738 1571.36 174.866 1571.36ZM174.866 1567.44C175.898 1567.44 176.81 1567.17 177.602 1566.64C178.418 1566.12 179.054 1565.41 179.51 1564.52C179.99 1563.63 180.218 1562.62 180.194 1561.5C180.218 1560.34 179.99 1559.32 179.51 1558.44C179.054 1557.55 178.418 1556.85 177.602 1556.35C176.81 1555.82 175.898 1555.56 174.866 1555.56C173.834 1555.56 172.898 1555.82 172.058 1556.35C171.242 1556.85 170.606 1557.56 170.15 1558.47C169.694 1559.36 169.466 1560.37 169.466 1561.5C169.466 1562.62 169.694 1563.63 170.15 1564.52C170.606 1565.41 171.242 1566.12 172.058 1566.64C172.898 1567.17 173.834 1567.44 174.866 1567.44ZM188.655 1571V1552.03H192.975L193.047 1555.92L192.219 1556.35C192.459 1555.48 192.927 1554.7 193.623 1554.01C194.319 1553.29 195.147 1552.71 196.107 1552.28C197.067 1551.85 198.051 1551.63 199.059 1551.63C200.499 1551.63 201.699 1551.92 202.659 1552.5C203.643 1553.07 204.375 1553.94 204.855 1555.09C205.359 1556.24 205.611 1557.68 205.611 1559.41V1571H201.183V1559.73C201.183 1558.77 201.051 1557.98 200.787 1557.36C200.523 1556.71 200.115 1556.24 199.563 1555.95C199.011 1555.64 198.339 1555.5 197.547 1555.52C196.899 1555.52 196.299 1555.63 195.747 1555.84C195.219 1556.04 194.751 1556.32 194.343 1556.71C193.959 1557.07 193.647 1557.49 193.407 1557.97C193.191 1558.45 193.083 1558.98 193.083 1559.55V1571H190.887C190.455 1571 190.047 1571 189.663 1571C189.303 1571 188.967 1571 188.655 1571Z"
                fill="#F6F6F6"
              />
              <g id="Vector 250" filter="url(#filter7_d_10_1969)">
                <path
                  d="M230 1539C471.04 1539 449.099 1604 632 1604"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 11">
              <path
                id="Luminex Gland"
                d="M1357.38 67V41.8H1362.06V62.68H1373.69V67H1357.38ZM1384.84 67.36C1383.47 67.36 1382.28 67.06 1381.27 66.46C1380.26 65.836 1379.5 64.96 1378.97 63.832C1378.44 62.68 1378.18 61.312 1378.18 59.728V48.028H1382.6V58.792C1382.6 59.8 1382.76 60.664 1383.07 61.384C1383.38 62.08 1383.84 62.62 1384.44 63.004C1385.04 63.388 1385.76 63.58 1386.6 63.58C1387.22 63.58 1387.79 63.484 1388.29 63.292C1388.82 63.076 1389.28 62.788 1389.66 62.428C1390.04 62.044 1390.34 61.6 1390.56 61.096C1390.78 60.568 1390.88 60.004 1390.88 59.404V48.028H1395.31V67H1390.99L1390.92 63.04L1391.71 62.608C1391.42 63.52 1390.93 64.336 1390.24 65.056C1389.56 65.752 1388.76 66.316 1387.82 66.748C1386.89 67.156 1385.89 67.36 1384.84 67.36ZM1400.43 67V48.028H1404.79L1404.86 51.844L1404.14 52.132C1404.35 51.508 1404.68 50.932 1405.11 50.404C1405.54 49.852 1406.06 49.384 1406.66 49C1407.26 48.592 1407.89 48.28 1408.57 48.064C1409.24 47.824 1409.92 47.704 1410.62 47.704C1411.65 47.704 1412.56 47.872 1413.35 48.208C1414.17 48.52 1414.84 49.024 1415.37 49.72C1415.92 50.416 1416.33 51.304 1416.59 52.384L1415.91 52.24L1416.2 51.664C1416.46 51.088 1416.83 50.572 1417.31 50.116C1417.79 49.636 1418.33 49.216 1418.93 48.856C1419.53 48.472 1420.16 48.184 1420.81 47.992C1421.48 47.8 1422.14 47.704 1422.79 47.704C1424.23 47.704 1425.43 47.992 1426.39 48.568C1427.35 49.144 1428.07 50.02 1428.55 51.196C1429.03 52.372 1429.27 53.824 1429.27 55.552V67H1424.8V55.84C1424.8 54.88 1424.67 54.088 1424.41 53.464C1424.17 52.84 1423.78 52.384 1423.25 52.096C1422.75 51.784 1422.11 51.628 1421.35 51.628C1420.75 51.628 1420.17 51.736 1419.62 51.952C1419.09 52.144 1418.63 52.432 1418.25 52.816C1417.87 53.176 1417.57 53.596 1417.35 54.076C1417.13 54.556 1417.03 55.084 1417.03 55.66V67H1412.56V55.804C1412.56 54.892 1412.43 54.136 1412.17 53.536C1411.9 52.912 1411.52 52.444 1411.01 52.132C1410.51 51.796 1409.9 51.628 1409.18 51.628C1408.58 51.628 1408.01 51.736 1407.49 51.952C1406.96 52.144 1406.5 52.42 1406.12 52.78C1405.73 53.14 1405.43 53.56 1405.22 54.04C1405 54.52 1404.89 55.048 1404.89 55.624V67H1400.43ZM1434.69 67V48.028H1439.11V67H1434.69ZM1436.85 43.996C1435.96 43.996 1435.26 43.78 1434.76 43.348C1434.28 42.892 1434.04 42.256 1434.04 41.44C1434.04 40.672 1434.29 40.048 1434.79 39.568C1435.3 39.088 1435.98 38.848 1436.85 38.848C1437.76 38.848 1438.45 39.076 1438.93 39.532C1439.44 39.964 1439.69 40.6 1439.69 41.44C1439.69 42.184 1439.44 42.796 1438.93 43.276C1438.43 43.756 1437.73 43.996 1436.85 43.996ZM1444.73 67V48.028H1449.05L1449.12 51.916L1448.29 52.348C1448.53 51.484 1449 50.704 1449.7 50.008C1450.39 49.288 1451.22 48.712 1452.18 48.28C1453.14 47.848 1454.12 47.632 1455.13 47.632C1456.57 47.632 1457.77 47.92 1458.73 48.496C1459.72 49.072 1460.45 49.936 1460.93 51.088C1461.43 52.24 1461.68 53.68 1461.68 55.408V67H1457.26V55.732C1457.26 54.772 1457.12 53.98 1456.86 53.356C1456.6 52.708 1456.19 52.24 1455.64 51.952C1455.08 51.64 1454.41 51.496 1453.62 51.52C1452.97 51.52 1452.37 51.628 1451.82 51.844C1451.29 52.036 1450.82 52.324 1450.42 52.708C1450.03 53.068 1449.72 53.488 1449.48 53.968C1449.26 54.448 1449.16 54.976 1449.16 55.552V67H1446.96C1446.53 67 1446.12 67 1445.74 67C1445.38 67 1445.04 67 1444.73 67ZM1475.56 67.36C1473.57 67.36 1471.8 66.94 1470.27 66.1C1468.75 65.26 1467.57 64.12 1466.7 62.68C1465.86 61.216 1465.44 59.548 1465.44 57.676C1465.44 56.188 1465.68 54.832 1466.16 53.608C1466.64 52.384 1467.3 51.328 1468.14 50.44C1469.01 49.528 1470.03 48.832 1471.2 48.352C1472.4 47.848 1473.71 47.596 1475.13 47.596C1476.37 47.596 1477.54 47.836 1478.62 48.316C1479.7 48.796 1480.63 49.456 1481.43 50.296C1482.22 51.112 1482.82 52.096 1483.23 53.248C1483.66 54.376 1483.86 55.612 1483.84 56.956L1483.8 58.504H1468.43L1467.6 55.48H1480.09L1479.52 56.092V55.3C1479.45 54.556 1479.21 53.908 1478.8 53.356C1478.39 52.78 1477.86 52.336 1477.21 52.024C1476.59 51.688 1475.89 51.52 1475.13 51.52C1473.95 51.52 1472.95 51.748 1472.14 52.204C1471.35 52.66 1470.75 53.32 1470.34 54.184C1469.93 55.024 1469.73 56.08 1469.73 57.352C1469.73 58.576 1469.98 59.644 1470.48 60.556C1471.01 61.468 1471.74 62.176 1472.68 62.68C1473.64 63.16 1474.75 63.4 1476.03 63.4C1476.91 63.4 1477.73 63.256 1478.47 62.968C1479.22 62.68 1480.02 62.164 1480.89 61.42L1483.08 64.48C1482.43 65.08 1481.69 65.596 1480.85 66.028C1480.03 66.436 1479.17 66.76 1478.26 67C1477.35 67.24 1476.45 67.36 1475.56 67.36ZM1499.93 67L1494.53 59.692L1493.52 58.324L1485.71 48.028H1491.18L1496.44 55.156L1497.55 56.668L1505.29 67H1499.93ZM1485.67 67L1493.2 56.92L1495.72 59.944L1490.89 67H1485.67ZM1497.55 58.144L1495.14 55.156L1499.5 48.028H1504.72L1497.55 58.144ZM1531.29 67.36C1529.39 67.36 1527.64 67.036 1526.03 66.388C1524.43 65.716 1523.02 64.792 1521.82 63.616C1520.65 62.44 1519.73 61.072 1519.09 59.512C1518.44 57.928 1518.11 56.212 1518.11 54.364C1518.11 52.54 1518.44 50.848 1519.09 49.288C1519.76 47.704 1520.69 46.336 1521.89 45.184C1523.09 44.008 1524.5 43.096 1526.11 42.448C1527.74 41.8 1529.49 41.476 1531.36 41.476C1532.68 41.476 1533.95 41.656 1535.18 42.016C1536.4 42.376 1537.51 42.88 1538.49 43.528C1539.47 44.176 1540.29 44.908 1540.94 45.724L1537.99 48.82C1537.31 48.172 1536.62 47.632 1535.9 47.2C1535.2 46.768 1534.47 46.432 1533.7 46.192C1532.93 45.952 1532.14 45.832 1531.33 45.832C1530.13 45.832 1529.01 46.048 1527.98 46.48C1526.97 46.912 1526.08 47.512 1525.31 48.28C1524.57 49.048 1523.98 49.948 1523.55 50.98C1523.12 52.012 1522.9 53.14 1522.9 54.364C1522.9 55.54 1523.12 56.656 1523.55 57.712C1524.01 58.768 1524.63 59.692 1525.42 60.484C1526.21 61.276 1527.13 61.9 1528.16 62.356C1529.21 62.788 1530.33 63.004 1531.51 63.004C1532.39 63.004 1533.22 62.872 1533.99 62.608C1534.76 62.344 1535.44 61.984 1536.04 61.528C1536.64 61.048 1537.1 60.496 1537.41 59.872C1537.75 59.248 1537.91 58.576 1537.91 57.856V57.064L1538.56 57.82H1531.11V53.644H1542.52C1542.57 53.908 1542.61 54.208 1542.63 54.544C1542.65 54.856 1542.67 55.168 1542.67 55.48C1542.69 55.768 1542.7 56.02 1542.7 56.236C1542.7 57.892 1542.41 59.404 1541.84 60.772C1541.26 62.116 1540.45 63.28 1539.39 64.264C1538.36 65.248 1537.15 66.016 1535.75 66.568C1534.39 67.096 1532.9 67.36 1531.29 67.36ZM1546.86 67V40.36H1551.32V67H1546.86ZM1563.34 67.36C1561.78 67.36 1560.36 66.928 1559.09 66.064C1557.82 65.2 1556.8 64.024 1556.03 62.536C1555.26 61.048 1554.88 59.356 1554.88 57.46C1554.88 55.564 1555.26 53.872 1556.03 52.384C1556.8 50.896 1557.84 49.732 1559.16 48.892C1560.48 48.052 1561.97 47.632 1563.63 47.632C1564.59 47.632 1565.46 47.776 1566.25 48.064C1567.05 48.328 1567.74 48.712 1568.34 49.216C1568.94 49.72 1569.43 50.296 1569.82 50.944C1570.23 51.592 1570.5 52.288 1570.65 53.032L1569.67 52.78V48.028H1574.14V67H1569.64V62.464L1570.68 62.284C1570.51 62.932 1570.2 63.568 1569.75 64.192C1569.31 64.792 1568.76 65.332 1568.09 65.812C1567.44 66.268 1566.71 66.64 1565.89 66.928C1565.1 67.216 1564.25 67.36 1563.34 67.36ZM1564.56 63.436C1565.59 63.436 1566.51 63.184 1567.3 62.68C1568.09 62.176 1568.7 61.48 1569.13 60.592C1569.59 59.68 1569.82 58.636 1569.82 57.46C1569.82 56.308 1569.59 55.288 1569.13 54.4C1568.7 53.512 1568.09 52.816 1567.3 52.312C1566.51 51.808 1565.59 51.556 1564.56 51.556C1563.53 51.556 1562.62 51.808 1561.83 52.312C1561.06 52.816 1560.46 53.512 1560.03 54.4C1559.59 55.288 1559.38 56.308 1559.38 57.46C1559.38 58.636 1559.59 59.68 1560.03 60.592C1560.46 61.48 1561.06 62.176 1561.83 62.68C1562.62 63.184 1563.53 63.436 1564.56 63.436ZM1579.27 67V48.028H1583.59L1583.66 51.916L1582.84 52.348C1583.08 51.484 1583.54 50.704 1584.24 50.008C1584.94 49.288 1585.76 48.712 1586.72 48.28C1587.68 47.848 1588.67 47.632 1589.68 47.632C1591.12 47.632 1592.32 47.92 1593.28 48.496C1594.26 49.072 1594.99 49.936 1595.47 51.088C1595.98 52.24 1596.23 53.68 1596.23 55.408V67H1591.8V55.732C1591.8 54.772 1591.67 53.98 1591.4 53.356C1591.14 52.708 1590.73 52.24 1590.18 51.952C1589.63 51.64 1588.96 51.496 1588.16 51.52C1587.52 51.52 1586.92 51.628 1586.36 51.844C1585.84 52.036 1585.37 52.324 1584.96 52.708C1584.58 53.068 1584.26 53.488 1584.02 53.968C1583.81 54.448 1583.7 54.976 1583.7 55.552V67H1581.5C1581.07 67 1580.66 67 1580.28 67C1579.92 67 1579.58 67 1579.27 67ZM1608.84 67.36C1607.16 67.36 1605.65 66.94 1604.31 66.1C1602.99 65.236 1601.93 64.072 1601.14 62.608C1600.37 61.12 1599.99 59.416 1599.99 57.496C1599.99 55.6 1600.37 53.908 1601.14 52.42C1601.91 50.932 1602.95 49.768 1604.27 48.928C1605.61 48.064 1607.13 47.632 1608.81 47.632C1609.72 47.632 1610.59 47.776 1611.43 48.064C1612.3 48.352 1613.07 48.748 1613.74 49.252C1614.41 49.732 1614.94 50.272 1615.32 50.872C1615.73 51.472 1615.96 52.096 1616.01 52.744L1614.82 52.888V40.36H1619.25V67H1614.96L1614.85 62.536L1615.72 62.608C1615.69 63.208 1615.48 63.784 1615.07 64.336C1614.69 64.888 1614.18 65.392 1613.56 65.848C1612.93 66.304 1612.2 66.676 1611.36 66.964C1610.55 67.228 1609.71 67.36 1608.84 67.36ZM1609.71 63.616C1610.74 63.616 1611.65 63.352 1612.44 62.824C1613.23 62.296 1613.85 61.576 1614.28 60.664C1614.73 59.752 1614.96 58.696 1614.96 57.496C1614.96 56.32 1614.73 55.276 1614.28 54.364C1613.85 53.428 1613.23 52.708 1612.44 52.204C1611.65 51.676 1610.74 51.412 1609.71 51.412C1608.67 51.412 1607.76 51.676 1606.97 52.204C1606.18 52.708 1605.55 53.428 1605.1 54.364C1604.67 55.276 1604.45 56.32 1604.45 57.496C1604.45 58.696 1604.67 59.752 1605.1 60.664C1605.55 61.576 1606.18 62.296 1606.97 62.824C1607.76 63.352 1608.67 63.616 1609.71 63.616Z"
                fill="#F6F6F6"
              />
              <g id="Vector 258" filter="url(#filter8_d_10_1969)">
                <path
                  d="M1657 53C1763.13 53 1826 255.5 1834 274"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 10">
              <path
                id="Aether Vent"
                d="M2167.58 213L2177.4 187.8H2181.8L2191.55 213H2186.69L2181.29 198.672C2181.17 198.384 2181 197.928 2180.79 197.304C2180.6 196.68 2180.38 196.008 2180.14 195.288C2179.9 194.544 2179.68 193.86 2179.49 193.236C2179.3 192.588 2179.16 192.12 2179.06 191.832L2179.96 191.796C2179.82 192.276 2179.65 192.816 2179.46 193.416C2179.26 194.016 2179.06 194.64 2178.84 195.288C2178.63 195.936 2178.41 196.56 2178.2 197.16C2178 197.76 2177.82 198.3 2177.66 198.78L2172.26 213H2167.58ZM2172.04 207.24L2173.66 203.172H2185.14L2186.87 207.24H2172.04ZM2202.92 213.36C2200.93 213.36 2199.16 212.94 2197.63 212.1C2196.11 211.26 2194.93 210.12 2194.06 208.68C2193.22 207.216 2192.8 205.548 2192.8 203.676C2192.8 202.188 2193.04 200.832 2193.52 199.608C2194 198.384 2194.66 197.328 2195.5 196.44C2196.37 195.528 2197.39 194.832 2198.56 194.352C2199.76 193.848 2201.07 193.596 2202.49 193.596C2203.73 193.596 2204.9 193.836 2205.98 194.316C2207.06 194.796 2207.99 195.456 2208.79 196.296C2209.58 197.112 2210.18 198.096 2210.59 199.248C2211.02 200.376 2211.22 201.612 2211.2 202.956L2211.16 204.504H2195.79L2194.96 201.48H2207.45L2206.88 202.092V201.3C2206.81 200.556 2206.57 199.908 2206.16 199.356C2205.75 198.78 2205.22 198.336 2204.57 198.024C2203.95 197.688 2203.25 197.52 2202.49 197.52C2201.31 197.52 2200.31 197.748 2199.5 198.204C2198.71 198.66 2198.11 199.32 2197.7 200.184C2197.29 201.024 2197.09 202.08 2197.09 203.352C2197.09 204.576 2197.34 205.644 2197.84 206.556C2198.37 207.468 2199.1 208.176 2200.04 208.68C2201 209.16 2202.11 209.4 2203.39 209.4C2204.27 209.4 2205.09 209.256 2205.83 208.968C2206.58 208.68 2207.38 208.164 2208.25 207.42L2210.44 210.48C2209.79 211.08 2209.05 211.596 2208.21 212.028C2207.39 212.436 2206.53 212.76 2205.62 213C2204.71 213.24 2203.81 213.36 2202.92 213.36ZM2217.17 213V189.204H2221.6V213H2217.17ZM2213.43 198.132V194.028H2225.74V198.132H2213.43ZM2229.11 213V186.36H2233.5V197.916L2232.68 198.348C2232.92 197.484 2233.38 196.704 2234.08 196.008C2234.78 195.288 2235.6 194.712 2236.56 194.28C2237.52 193.848 2238.51 193.632 2239.52 193.632C2240.96 193.632 2242.16 193.92 2243.12 194.496C2244.1 195.072 2244.83 195.936 2245.31 197.088C2245.82 198.24 2246.07 199.68 2246.07 201.408V213H2241.64V201.732C2241.64 200.772 2241.51 199.98 2241.24 199.356C2240.98 198.708 2240.57 198.24 2240.02 197.952C2239.47 197.64 2238.8 197.496 2238 197.52C2237.36 197.52 2236.76 197.628 2236.2 197.844C2235.68 198.036 2235.21 198.324 2234.8 198.708C2234.42 199.068 2234.1 199.488 2233.86 199.968C2233.65 200.448 2233.54 200.976 2233.54 201.552V213H2231.34C2230.91 213 2230.5 213 2230.12 213C2229.76 213 2229.42 213 2229.11 213ZM2259.94 213.36C2257.95 213.36 2256.19 212.94 2254.65 212.1C2253.14 211.26 2251.95 210.12 2251.09 208.68C2250.25 207.216 2249.83 205.548 2249.83 203.676C2249.83 202.188 2250.07 200.832 2250.55 199.608C2251.03 198.384 2251.69 197.328 2252.53 196.44C2253.39 195.528 2254.41 194.832 2255.59 194.352C2256.79 193.848 2258.09 193.596 2259.51 193.596C2260.76 193.596 2261.92 193.836 2263 194.316C2264.08 194.796 2265.02 195.456 2265.81 196.296C2266.6 197.112 2267.2 198.096 2267.61 199.248C2268.04 200.376 2268.25 201.612 2268.22 202.956L2268.19 204.504H2252.81L2251.99 201.48H2264.48L2263.9 202.092V201.3C2263.83 200.556 2263.59 199.908 2263.18 199.356C2262.77 198.78 2262.25 198.336 2261.6 198.024C2260.97 197.688 2260.28 197.52 2259.51 197.52C2258.33 197.52 2257.34 197.748 2256.52 198.204C2255.73 198.66 2255.13 199.32 2254.72 200.184C2254.31 201.024 2254.11 202.08 2254.11 203.352C2254.11 204.576 2254.36 205.644 2254.87 206.556C2255.39 207.468 2256.13 208.176 2257.06 208.68C2258.02 209.16 2259.14 209.4 2260.41 209.4C2261.3 209.4 2262.11 209.256 2262.86 208.968C2263.6 208.68 2264.41 208.164 2265.27 207.42L2267.47 210.48C2266.82 211.08 2266.07 211.596 2265.23 212.028C2264.42 212.436 2263.55 212.76 2262.64 213C2261.73 213.24 2260.83 213.36 2259.94 213.36ZM2272.14 213V194.028H2276.5L2276.57 200.076L2275.96 198.708C2276.22 197.748 2276.68 196.884 2277.33 196.116C2277.97 195.348 2278.72 194.748 2279.56 194.316C2280.42 193.86 2281.32 193.632 2282.26 193.632C2282.67 193.632 2283.05 193.668 2283.41 193.74C2283.79 193.812 2284.11 193.896 2284.35 193.992L2283.16 198.852C2282.89 198.708 2282.57 198.588 2282.19 198.492C2281.8 198.396 2281.42 198.348 2281.03 198.348C2280.43 198.348 2279.86 198.468 2279.31 198.708C2278.78 198.924 2278.31 199.236 2277.9 199.644C2277.49 200.052 2277.17 200.532 2276.93 201.084C2276.71 201.612 2276.61 202.212 2276.61 202.884V213H2272.14ZM2305.98 213L2295.9 187.8H2301.01L2306.63 202.236C2306.91 202.98 2307.17 203.652 2307.38 204.252C2307.6 204.828 2307.79 205.356 2307.96 205.836C2308.13 206.316 2308.27 206.784 2308.39 207.24C2308.53 207.696 2308.69 208.176 2308.86 208.68H2307.85C2308.02 208.032 2308.2 207.396 2308.39 206.772C2308.58 206.124 2308.8 205.44 2309.04 204.72C2309.3 204 2309.61 203.172 2309.97 202.236L2315.23 187.8H2320.38L2310.23 213H2305.98ZM2330.32 213.36C2328.33 213.36 2326.57 212.94 2325.03 212.1C2323.52 211.26 2322.33 210.12 2321.47 208.68C2320.63 207.216 2320.21 205.548 2320.21 203.676C2320.21 202.188 2320.45 200.832 2320.93 199.608C2321.41 198.384 2322.07 197.328 2322.91 196.44C2323.77 195.528 2324.79 194.832 2325.97 194.352C2327.17 193.848 2328.48 193.596 2329.89 193.596C2331.14 193.596 2332.3 193.836 2333.38 194.316C2334.46 194.796 2335.4 195.456 2336.19 196.296C2336.98 197.112 2337.58 198.096 2337.99 199.248C2338.42 200.376 2338.63 201.612 2338.6 202.956L2338.57 204.504H2323.2L2322.37 201.48H2334.86L2334.28 202.092V201.3C2334.21 200.556 2333.97 199.908 2333.56 199.356C2333.16 198.78 2332.63 198.336 2331.98 198.024C2331.36 197.688 2330.66 197.52 2329.89 197.52C2328.72 197.52 2327.72 197.748 2326.9 198.204C2326.11 198.66 2325.51 199.32 2325.1 200.184C2324.7 201.024 2324.49 202.08 2324.49 203.352C2324.49 204.576 2324.74 205.644 2325.25 206.556C2325.78 207.468 2326.51 208.176 2327.44 208.68C2328.4 209.16 2329.52 209.4 2330.79 209.4C2331.68 209.4 2332.5 209.256 2333.24 208.968C2333.98 208.68 2334.79 208.164 2335.65 207.42L2337.85 210.48C2337.2 211.08 2336.46 211.596 2335.62 212.028C2334.8 212.436 2333.94 212.76 2333.02 213C2332.11 213.24 2331.21 213.36 2330.32 213.36ZM2342.53 213V194.028H2346.85L2346.92 197.916L2346.09 198.348C2346.33 197.484 2346.8 196.704 2347.49 196.008C2348.19 195.288 2349.02 194.712 2349.98 194.28C2350.94 193.848 2351.92 193.632 2352.93 193.632C2354.37 193.632 2355.57 193.92 2356.53 194.496C2357.51 195.072 2358.25 195.936 2358.73 197.088C2359.23 198.24 2359.48 199.68 2359.48 201.408V213H2355.05V201.732C2355.05 200.772 2354.92 199.98 2354.66 199.356C2354.39 198.708 2353.99 198.24 2353.43 197.952C2352.88 197.64 2352.21 197.496 2351.42 197.52C2350.77 197.52 2350.17 197.628 2349.62 197.844C2349.09 198.036 2348.62 198.324 2348.21 198.708C2347.83 199.068 2347.52 199.488 2347.28 199.968C2347.06 200.448 2346.95 200.976 2346.95 201.552V213H2344.76C2344.33 213 2343.92 213 2343.53 213C2343.17 213 2342.84 213 2342.53 213ZM2366.52 213V189.204H2370.94V213H2366.52ZM2362.77 198.132V194.028H2375.08V198.132H2362.77Z"
                fill="#F6F6F6"
              />
              <g id="Vector 259" filter="url(#filter9_d_10_1969)">
                <path
                  d="M1918 348C2046.31 348 2034.63 205 2132 205"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 9">
              <path
                id="Chromatophoral Sac"
                d="M2440.08 347.36C2438.25 347.36 2436.58 347.048 2435.07 346.424C2433.56 345.8 2432.25 344.912 2431.15 343.76C2430.04 342.584 2429.18 341.204 2428.56 339.62C2427.96 338.012 2427.66 336.26 2427.66 334.364C2427.66 332.54 2427.98 330.848 2428.63 329.288C2429.28 327.728 2430.18 326.36 2431.33 325.184C2432.48 324.008 2433.82 323.096 2435.36 322.448C2436.9 321.8 2438.56 321.476 2440.36 321.476C2441.59 321.476 2442.78 321.656 2443.93 322.016C2445.08 322.376 2446.14 322.88 2447.1 323.528C2448.06 324.152 2448.86 324.884 2449.51 325.724L2446.52 329C2445.9 328.352 2445.25 327.812 2444.58 327.38C2443.93 326.924 2443.24 326.588 2442.52 326.372C2441.83 326.132 2441.11 326.012 2440.36 326.012C2439.26 326.012 2438.22 326.216 2437.23 326.624C2436.27 327.032 2435.43 327.608 2434.71 328.352C2434.02 329.096 2433.46 329.984 2433.06 331.016C2432.65 332.024 2432.44 333.152 2432.44 334.4C2432.44 335.672 2432.64 336.824 2433.02 337.856C2433.43 338.888 2433.99 339.776 2434.71 340.52C2435.46 341.264 2436.33 341.84 2437.34 342.248C2438.37 342.632 2439.5 342.824 2440.72 342.824C2441.52 342.824 2442.28 342.716 2443.03 342.5C2443.77 342.284 2444.46 341.984 2445.08 341.6C2445.73 341.192 2446.32 340.724 2446.84 340.196L2449.15 343.904C2448.57 344.552 2447.8 345.14 2446.84 345.668C2445.88 346.196 2444.8 346.616 2443.6 346.928C2442.43 347.216 2441.25 347.36 2440.08 347.36ZM2453.2 347V320.36H2457.59V331.916L2456.77 332.348C2457.01 331.484 2457.47 330.704 2458.17 330.008C2458.87 329.288 2459.69 328.712 2460.65 328.28C2461.61 327.848 2462.6 327.632 2463.61 327.632C2465.05 327.632 2466.25 327.92 2467.21 328.496C2468.19 329.072 2468.92 329.936 2469.4 331.088C2469.91 332.24 2470.16 333.68 2470.16 335.408V347H2465.73V335.732C2465.73 334.772 2465.6 333.98 2465.33 333.356C2465.07 332.708 2464.66 332.24 2464.11 331.952C2463.56 331.64 2462.89 331.496 2462.09 331.52C2461.45 331.52 2460.85 331.628 2460.29 331.844C2459.77 332.036 2459.3 332.324 2458.89 332.708C2458.51 333.068 2458.19 333.488 2457.95 333.968C2457.74 334.448 2457.63 334.976 2457.63 335.552V347H2455.43C2455 347 2454.59 347 2454.21 347C2453.85 347 2453.51 347 2453.2 347ZM2475.14 347V328.028H2479.49L2479.57 334.076L2478.95 332.708C2479.22 331.748 2479.67 330.884 2480.32 330.116C2480.97 329.348 2481.71 328.748 2482.55 328.316C2483.42 327.86 2484.32 327.632 2485.25 327.632C2485.66 327.632 2486.05 327.668 2486.41 327.74C2486.79 327.812 2487.1 327.896 2487.34 327.992L2486.15 332.852C2485.89 332.708 2485.57 332.588 2485.18 332.492C2484.8 332.396 2484.41 332.348 2484.03 332.348C2483.43 332.348 2482.85 332.468 2482.3 332.708C2481.77 332.924 2481.31 333.236 2480.9 333.644C2480.49 334.052 2480.17 334.532 2479.93 335.084C2479.71 335.612 2479.6 336.212 2479.6 336.884V347H2475.14ZM2498.16 347.36C2496.26 347.36 2494.57 346.94 2493.08 346.1C2491.59 345.236 2490.42 344.06 2489.55 342.572C2488.69 341.084 2488.26 339.392 2488.26 337.496C2488.26 335.6 2488.69 333.908 2489.55 332.42C2490.42 330.932 2491.59 329.768 2493.08 328.928C2494.57 328.064 2496.26 327.632 2498.16 327.632C2500.03 327.632 2501.71 328.064 2503.2 328.928C2504.69 329.768 2505.85 330.932 2506.69 332.42C2507.55 333.908 2507.99 335.6 2507.99 337.496C2507.99 339.392 2507.55 341.084 2506.69 342.572C2505.85 344.06 2504.69 345.236 2503.2 346.1C2501.71 346.94 2500.03 347.36 2498.16 347.36ZM2498.16 343.436C2499.19 343.436 2500.1 343.172 2500.89 342.644C2501.71 342.116 2502.35 341.408 2502.8 340.52C2503.28 339.632 2503.51 338.624 2503.49 337.496C2503.51 336.344 2503.28 335.324 2502.8 334.436C2502.35 333.548 2501.71 332.852 2500.89 332.348C2500.1 331.82 2499.19 331.556 2498.16 331.556C2497.13 331.556 2496.19 331.82 2495.35 332.348C2494.53 332.852 2493.9 333.56 2493.44 334.472C2492.99 335.36 2492.76 336.368 2492.76 337.496C2492.76 338.624 2492.99 339.632 2493.44 340.52C2493.9 341.408 2494.53 342.116 2495.35 342.644C2496.19 343.172 2497.13 343.436 2498.16 343.436ZM2511.88 347V328.028H2516.23L2516.3 331.844L2515.58 332.132C2515.8 331.508 2516.12 330.932 2516.56 330.404C2516.99 329.852 2517.5 329.384 2518.1 329C2518.7 328.592 2519.34 328.28 2520.01 328.064C2520.68 327.824 2521.37 327.704 2522.06 327.704C2523.1 327.704 2524.01 327.872 2524.8 328.208C2525.62 328.52 2526.29 329.024 2526.82 329.72C2527.37 330.416 2527.78 331.304 2528.04 332.384L2527.36 332.24L2527.64 331.664C2527.91 331.088 2528.28 330.572 2528.76 330.116C2529.24 329.636 2529.78 329.216 2530.38 328.856C2530.98 328.472 2531.6 328.184 2532.25 327.992C2532.92 327.8 2533.58 327.704 2534.23 327.704C2535.67 327.704 2536.87 327.992 2537.83 328.568C2538.79 329.144 2539.51 330.02 2539.99 331.196C2540.47 332.372 2540.71 333.824 2540.71 335.552V347H2536.25V335.84C2536.25 334.88 2536.12 334.088 2535.85 333.464C2535.61 332.84 2535.23 332.384 2534.7 332.096C2534.2 331.784 2533.56 331.628 2532.79 331.628C2532.19 331.628 2531.62 331.736 2531.06 331.952C2530.54 332.144 2530.08 332.432 2529.7 332.816C2529.31 333.176 2529.01 333.596 2528.8 334.076C2528.58 334.556 2528.47 335.084 2528.47 335.66V347H2524.01V335.804C2524.01 334.892 2523.88 334.136 2523.61 333.536C2523.35 332.912 2522.96 332.444 2522.46 332.132C2521.96 331.796 2521.34 331.628 2520.62 331.628C2520.02 331.628 2519.46 331.736 2518.93 331.952C2518.4 332.144 2517.95 332.42 2517.56 332.78C2517.18 333.14 2516.88 333.56 2516.66 334.04C2516.45 334.52 2516.34 335.048 2516.34 335.624V347H2511.88ZM2552.79 347.36C2551.23 347.36 2549.82 346.928 2548.54 346.064C2547.27 345.2 2546.25 344.024 2545.48 342.536C2544.72 341.048 2544.33 339.356 2544.33 337.46C2544.33 335.564 2544.72 333.872 2545.48 332.384C2546.25 330.896 2547.3 329.732 2548.62 328.892C2549.94 328.052 2551.42 327.632 2553.08 327.632C2554.04 327.632 2554.92 327.776 2555.71 328.064C2556.5 328.328 2557.2 328.712 2557.8 329.216C2558.4 329.72 2558.89 330.296 2559.27 330.944C2559.68 331.592 2559.96 332.288 2560.1 333.032L2559.13 332.78V328.028H2563.59V347H2559.09V342.464L2560.14 342.284C2559.97 342.932 2559.66 343.568 2559.2 344.192C2558.77 344.792 2558.22 345.332 2557.54 345.812C2556.9 346.268 2556.16 346.64 2555.35 346.928C2554.56 347.216 2553.7 347.36 2552.79 347.36ZM2554.02 343.436C2555.05 343.436 2555.96 343.184 2556.75 342.68C2557.54 342.176 2558.16 341.48 2558.59 340.592C2559.04 339.68 2559.27 338.636 2559.27 337.46C2559.27 336.308 2559.04 335.288 2558.59 334.4C2558.16 333.512 2557.54 332.816 2556.75 332.312C2555.96 331.808 2555.05 331.556 2554.02 331.556C2552.98 331.556 2552.07 331.808 2551.28 332.312C2550.51 332.816 2549.91 333.512 2549.48 334.4C2549.05 335.288 2548.83 336.308 2548.83 337.46C2548.83 338.636 2549.05 339.68 2549.48 340.592C2549.91 341.48 2550.51 342.176 2551.28 342.68C2552.07 343.184 2552.98 343.436 2554.02 343.436ZM2570.78 347V323.204H2575.2V347H2570.78ZM2567.03 332.132V328.028H2579.34V332.132H2567.03ZM2591.22 347.36C2589.32 347.36 2587.63 346.94 2586.14 346.1C2584.65 345.236 2583.48 344.06 2582.61 342.572C2581.75 341.084 2581.32 339.392 2581.32 337.496C2581.32 335.6 2581.75 333.908 2582.61 332.42C2583.48 330.932 2584.65 329.768 2586.14 328.928C2587.63 328.064 2589.32 327.632 2591.22 327.632C2593.09 327.632 2594.77 328.064 2596.26 328.928C2597.75 329.768 2598.91 330.932 2599.75 332.42C2600.61 333.908 2601.05 335.6 2601.05 337.496C2601.05 339.392 2600.61 341.084 2599.75 342.572C2598.91 344.06 2597.75 345.236 2596.26 346.1C2594.77 346.94 2593.09 347.36 2591.22 347.36ZM2591.22 343.436C2592.25 343.436 2593.16 343.172 2593.95 342.644C2594.77 342.116 2595.41 341.408 2595.86 340.52C2596.34 339.632 2596.57 338.624 2596.55 337.496C2596.57 336.344 2596.34 335.324 2595.86 334.436C2595.41 333.548 2594.77 332.852 2593.95 332.348C2593.16 331.82 2592.25 331.556 2591.22 331.556C2590.19 331.556 2589.25 331.82 2588.41 332.348C2587.59 332.852 2586.96 333.56 2586.5 334.472C2586.05 335.36 2585.82 336.368 2585.82 337.496C2585.82 338.624 2586.05 339.632 2586.5 340.52C2586.96 341.408 2587.59 342.116 2588.41 342.644C2589.25 343.172 2590.19 343.436 2591.22 343.436ZM2605.01 354.92V328.028H2609.36L2609.43 332.348L2608.68 332.024C2608.82 331.28 2609.23 330.584 2609.9 329.936C2610.57 329.264 2611.39 328.724 2612.35 328.316C2613.33 327.908 2614.35 327.704 2615.41 327.704C2617.09 327.704 2618.58 328.124 2619.87 328.964C2621.19 329.804 2622.23 330.956 2622.97 332.42C2623.74 333.884 2624.12 335.576 2624.12 337.496C2624.12 339.392 2623.74 341.084 2622.97 342.572C2622.23 344.036 2621.19 345.2 2619.87 346.064C2618.58 346.904 2617.11 347.324 2615.48 347.324C2614.38 347.324 2613.31 347.108 2612.28 346.676C2611.27 346.244 2610.41 345.68 2609.69 344.984C2608.99 344.288 2608.56 343.556 2608.39 342.788L2609.47 342.284V354.92H2605.01ZM2614.58 343.4C2615.59 343.4 2616.49 343.148 2617.28 342.644C2618.07 342.14 2618.69 341.444 2619.12 340.556C2619.57 339.668 2619.8 338.648 2619.8 337.496C2619.8 336.344 2619.59 335.336 2619.15 334.472C2618.72 333.584 2618.11 332.888 2617.32 332.384C2616.53 331.88 2615.61 331.628 2614.58 331.628C2613.53 331.628 2612.6 331.88 2611.81 332.384C2611.04 332.864 2610.43 333.548 2609.97 334.436C2609.52 335.324 2609.29 336.344 2609.29 337.496C2609.29 338.648 2609.52 339.668 2609.97 340.556C2610.43 341.444 2611.04 342.14 2611.81 342.644C2612.6 343.148 2613.53 343.4 2614.58 343.4ZM2628.07 347V320.36H2632.46V331.916L2631.63 332.348C2631.87 331.484 2632.34 330.704 2633.04 330.008C2633.73 329.288 2634.56 328.712 2635.52 328.28C2636.48 327.848 2637.46 327.632 2638.47 327.632C2639.91 327.632 2641.11 327.92 2642.07 328.496C2643.06 329.072 2643.79 329.936 2644.27 331.088C2644.77 332.24 2645.02 333.68 2645.02 335.408V347H2640.6V335.732C2640.6 334.772 2640.46 333.98 2640.2 333.356C2639.94 332.708 2639.53 332.24 2638.98 331.952C2638.42 331.64 2637.75 331.496 2636.96 331.52C2636.31 331.52 2635.71 331.628 2635.16 331.844C2634.63 332.036 2634.16 332.324 2633.76 332.708C2633.37 333.068 2633.06 333.488 2632.82 333.968C2632.6 334.448 2632.5 334.976 2632.5 335.552V347H2630.3C2629.87 347 2629.46 347 2629.08 347C2628.72 347 2628.38 347 2628.07 347ZM2658.68 347.36C2656.79 347.36 2655.09 346.94 2653.61 346.1C2652.12 345.236 2650.94 344.06 2650.08 342.572C2649.21 341.084 2648.78 339.392 2648.78 337.496C2648.78 335.6 2649.21 333.908 2650.08 332.42C2650.94 330.932 2652.12 329.768 2653.61 328.928C2655.09 328.064 2656.79 327.632 2658.68 327.632C2660.55 327.632 2662.23 328.064 2663.72 328.928C2665.21 329.768 2666.37 330.932 2667.21 332.42C2668.08 333.908 2668.51 335.6 2668.51 337.496C2668.51 339.392 2668.08 341.084 2667.21 342.572C2666.37 344.06 2665.21 345.236 2663.72 346.1C2662.23 346.94 2660.55 347.36 2658.68 347.36ZM2658.68 343.436C2659.71 343.436 2660.63 343.172 2661.42 342.644C2662.23 342.116 2662.87 341.408 2663.33 340.52C2663.81 339.632 2664.03 338.624 2664.01 337.496C2664.03 336.344 2663.81 335.324 2663.33 334.436C2662.87 333.548 2662.23 332.852 2661.42 332.348C2660.63 331.82 2659.71 331.556 2658.68 331.556C2657.65 331.556 2656.71 331.82 2655.87 332.348C2655.06 332.852 2654.42 333.56 2653.97 334.472C2653.51 335.36 2653.28 336.368 2653.28 337.496C2653.28 338.624 2653.51 339.632 2653.97 340.52C2654.42 341.408 2655.06 342.116 2655.87 342.644C2656.71 343.172 2657.65 343.436 2658.68 343.436ZM2672.47 347V328.028H2676.83L2676.9 334.076L2676.29 332.708C2676.55 331.748 2677.01 330.884 2677.65 330.116C2678.3 329.348 2679.05 328.748 2679.89 328.316C2680.75 327.86 2681.65 327.632 2682.59 327.632C2682.99 327.632 2683.38 327.668 2683.74 327.74C2684.12 327.812 2684.43 327.896 2684.67 327.992L2683.49 332.852C2683.22 332.708 2682.9 332.588 2682.51 332.492C2682.13 332.396 2681.75 332.348 2681.36 332.348C2680.76 332.348 2680.19 332.468 2679.63 332.708C2679.11 332.924 2678.64 333.236 2678.23 333.644C2677.82 334.052 2677.5 334.532 2677.26 335.084C2677.04 335.612 2676.93 336.212 2676.93 336.884V347H2672.47ZM2693.98 347.36C2692.42 347.36 2691 346.928 2689.73 346.064C2688.46 345.2 2687.44 344.024 2686.67 342.536C2685.9 341.048 2685.52 339.356 2685.52 337.46C2685.52 335.564 2685.9 333.872 2686.67 332.384C2687.44 330.896 2688.48 329.732 2689.8 328.892C2691.12 328.052 2692.61 327.632 2694.27 327.632C2695.23 327.632 2696.1 327.776 2696.89 328.064C2697.69 328.328 2698.38 328.712 2698.98 329.216C2699.58 329.72 2700.07 330.296 2700.46 330.944C2700.87 331.592 2701.14 332.288 2701.29 333.032L2700.31 332.78V328.028H2704.78V347H2700.28V342.464L2701.32 342.284C2701.15 342.932 2700.84 343.568 2700.39 344.192C2699.95 344.792 2699.4 345.332 2698.73 345.812C2698.08 346.268 2697.35 346.64 2696.53 346.928C2695.74 347.216 2694.89 347.36 2693.98 347.36ZM2695.2 343.436C2696.23 343.436 2697.15 343.184 2697.94 342.68C2698.73 342.176 2699.34 341.48 2699.77 340.592C2700.23 339.68 2700.46 338.636 2700.46 337.46C2700.46 336.308 2700.23 335.288 2699.77 334.4C2699.34 333.512 2698.73 332.816 2697.94 332.312C2697.15 331.808 2696.23 331.556 2695.2 331.556C2694.17 331.556 2693.26 331.808 2692.47 332.312C2691.7 332.816 2691.1 333.512 2690.67 334.4C2690.23 335.288 2690.02 336.308 2690.02 337.46C2690.02 338.636 2690.23 339.68 2690.67 340.592C2691.1 341.48 2691.7 342.176 2692.47 342.68C2693.26 343.184 2694.17 343.436 2695.2 343.436ZM2709.95 347V320.36H2714.41V347H2709.95ZM2738.98 347.36C2737.52 347.36 2736.17 347.18 2734.95 346.82C2733.73 346.436 2732.62 345.872 2731.64 345.128C2730.65 344.384 2729.78 343.484 2729.01 342.428L2732.07 338.972C2733.25 340.604 2734.4 341.732 2735.53 342.356C2736.65 342.98 2737.93 343.292 2739.34 343.292C2740.16 343.292 2740.9 343.172 2741.57 342.932C2742.25 342.668 2742.77 342.32 2743.16 341.888C2743.54 341.432 2743.73 340.916 2743.73 340.34C2743.73 339.932 2743.65 339.56 2743.48 339.224C2743.34 338.864 2743.11 338.552 2742.8 338.288C2742.49 338 2742.1 337.736 2741.65 337.496C2741.19 337.256 2740.67 337.052 2740.1 336.884C2739.52 336.716 2738.89 336.56 2738.19 336.416C2736.87 336.152 2735.72 335.804 2734.73 335.372C2733.75 334.916 2732.92 334.364 2732.25 333.716C2731.58 333.044 2731.09 332.3 2730.77 331.484C2730.46 330.644 2730.31 329.696 2730.31 328.64C2730.31 327.584 2730.53 326.612 2730.99 325.724C2731.47 324.836 2732.12 324.068 2732.93 323.42C2733.75 322.772 2734.7 322.268 2735.78 321.908C2736.86 321.548 2738.02 321.368 2739.27 321.368C2740.69 321.368 2741.95 321.536 2743.05 321.872C2744.18 322.208 2745.16 322.712 2746 323.384C2746.87 324.032 2747.57 324.824 2748.13 325.76L2745.03 328.82C2744.55 328.076 2744.01 327.464 2743.41 326.984C2742.81 326.48 2742.16 326.108 2741.47 325.868C2740.77 325.604 2740.04 325.472 2739.27 325.472C2738.41 325.472 2737.65 325.592 2737 325.832C2736.38 326.072 2735.89 326.42 2735.53 326.876C2735.17 327.308 2734.99 327.836 2734.99 328.46C2734.99 328.94 2735.09 329.372 2735.31 329.756C2735.53 330.116 2735.83 330.44 2736.21 330.728C2736.62 331.016 2737.13 331.268 2737.76 331.484C2738.38 331.7 2739.09 331.892 2739.88 332.06C2741.2 332.324 2742.39 332.684 2743.45 333.14C2744.5 333.572 2745.4 334.1 2746.15 334.724C2746.89 335.324 2747.45 336.02 2747.84 336.812C2748.22 337.58 2748.41 338.444 2748.41 339.404C2748.41 341.06 2748.02 342.488 2747.23 343.688C2746.46 344.864 2745.37 345.776 2743.95 346.424C2742.53 347.048 2740.88 347.36 2738.98 347.36ZM2759.93 347.36C2758.37 347.36 2756.96 346.928 2755.68 346.064C2754.41 345.2 2753.39 344.024 2752.62 342.536C2751.86 341.048 2751.47 339.356 2751.47 337.46C2751.47 335.564 2751.86 333.872 2752.62 332.384C2753.39 330.896 2754.44 329.732 2755.76 328.892C2757.08 328.052 2758.56 327.632 2760.22 327.632C2761.18 327.632 2762.06 327.776 2762.85 328.064C2763.64 328.328 2764.34 328.712 2764.94 329.216C2765.54 329.72 2766.03 330.296 2766.41 330.944C2766.82 331.592 2767.1 332.288 2767.24 333.032L2766.27 332.78V328.028H2770.73V347H2766.23V342.464L2767.28 342.284C2767.11 342.932 2766.8 343.568 2766.34 344.192C2765.91 344.792 2765.36 345.332 2764.68 345.812C2764.04 346.268 2763.3 346.64 2762.49 346.928C2761.7 347.216 2760.84 347.36 2759.93 347.36ZM2761.16 343.436C2762.19 343.436 2763.1 343.184 2763.89 342.68C2764.68 342.176 2765.3 341.48 2765.73 340.592C2766.18 339.68 2766.41 338.636 2766.41 337.46C2766.41 336.308 2766.18 335.288 2765.73 334.4C2765.3 333.512 2764.68 332.816 2763.89 332.312C2763.1 331.808 2762.19 331.556 2761.16 331.556C2760.12 331.556 2759.21 331.808 2758.42 332.312C2757.65 332.816 2757.05 333.512 2756.62 334.4C2756.19 335.288 2755.97 336.308 2755.97 337.46C2755.97 338.636 2756.19 339.68 2756.62 340.592C2757.05 341.48 2757.65 342.176 2758.42 342.68C2759.21 343.184 2760.12 343.436 2761.16 343.436ZM2784 347.36C2782.23 347.36 2780.63 346.928 2779.21 346.064C2777.8 345.2 2776.68 344.024 2775.87 342.536C2775.05 341.048 2774.64 339.368 2774.64 337.496C2774.64 335.624 2775.05 333.944 2775.87 332.456C2776.68 330.968 2777.8 329.792 2779.21 328.928C2780.63 328.064 2782.23 327.632 2784 327.632C2785.71 327.632 2787.25 327.956 2788.65 328.604C2790.04 329.252 2791.12 330.152 2791.89 331.304L2789.44 334.256C2789.08 333.752 2788.62 333.296 2788.07 332.888C2787.52 332.48 2786.93 332.156 2786.31 331.916C2785.68 331.676 2785.06 331.556 2784.43 331.556C2783.38 331.556 2782.43 331.82 2781.59 332.348C2780.77 332.852 2780.13 333.56 2779.65 334.472C2779.17 335.36 2778.93 336.368 2778.93 337.496C2778.93 338.624 2779.17 339.632 2779.65 340.52C2780.15 341.408 2780.82 342.116 2781.66 342.644C2782.5 343.172 2783.44 343.436 2784.47 343.436C2785.09 343.436 2785.69 343.34 2786.27 343.148C2786.87 342.932 2787.43 342.632 2787.96 342.248C2788.49 341.864 2788.98 341.384 2789.44 340.808L2791.89 343.796C2791.07 344.852 2789.94 345.716 2788.5 346.388C2787.09 347.036 2785.59 347.36 2784 347.36Z"
                fill="#F6F6F6"
              />
              <g id="Vector 260" filter="url(#filter10_d_10_1969)">
                <path
                  d="M1905 705C2198.21 705 2171.52 335 2394 335"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 3">
              <path
                id="Limbic Ridges"
                d="M33.5207 1727V1701.8H38.2007V1722.68H49.8287V1727H33.5207ZM54.889 1727V1708.03H59.317V1727H54.889ZM57.049 1704C56.161 1704 55.465 1703.78 54.961 1703.35C54.481 1702.89 54.241 1702.26 54.241 1701.44C54.241 1700.67 54.493 1700.05 54.997 1699.57C55.501 1699.09 56.185 1698.85 57.049 1698.85C57.961 1698.85 58.657 1699.08 59.137 1699.53C59.641 1699.96 59.893 1700.6 59.893 1701.44C59.893 1702.18 59.641 1702.8 59.137 1703.28C58.633 1703.76 57.937 1704 57.049 1704ZM64.8598 1727V1708.03H69.2158L69.2878 1711.84L68.5678 1712.13C68.7838 1711.51 69.1078 1710.93 69.5398 1710.4C69.9718 1709.85 70.4878 1709.38 71.0878 1709C71.6878 1708.59 72.3238 1708.28 72.9958 1708.06C73.6678 1707.82 74.3518 1707.7 75.0478 1707.7C76.0798 1707.7 76.9918 1707.87 77.7838 1708.21C78.5998 1708.52 79.2718 1709.02 79.7998 1709.72C80.3518 1710.42 80.7598 1711.3 81.0238 1712.38L80.3398 1712.24L80.6278 1711.66C80.8918 1711.09 81.2638 1710.57 81.7438 1710.12C82.2238 1709.64 82.7638 1709.22 83.3638 1708.86C83.9638 1708.47 84.5878 1708.18 85.2358 1707.99C85.9078 1707.8 86.5678 1707.7 87.2158 1707.7C88.6558 1707.7 89.8558 1707.99 90.8158 1708.57C91.7758 1709.14 92.4958 1710.02 92.9758 1711.2C93.4558 1712.37 93.6958 1713.82 93.6958 1715.55V1727H89.2318V1715.84C89.2318 1714.88 89.0998 1714.09 88.8358 1713.46C88.5958 1712.84 88.2118 1712.38 87.6838 1712.1C87.1798 1711.78 86.5438 1711.63 85.7758 1711.63C85.1758 1711.63 84.5998 1711.74 84.0478 1711.95C83.5198 1712.14 83.0638 1712.43 82.6798 1712.82C82.2958 1713.18 81.9958 1713.6 81.7798 1714.08C81.5638 1714.56 81.4558 1715.08 81.4558 1715.66V1727H76.9918V1715.8C76.9918 1714.89 76.8598 1714.14 76.5958 1713.54C76.3318 1712.91 75.9478 1712.44 75.4438 1712.13C74.9398 1711.8 74.3278 1711.63 73.6078 1711.63C73.0078 1711.63 72.4438 1711.74 71.9158 1711.95C71.3878 1712.14 70.9318 1712.42 70.5478 1712.78C70.1638 1713.14 69.8638 1713.56 69.6478 1714.04C69.4318 1714.52 69.3238 1715.05 69.3238 1715.62V1727H64.8598ZM109.088 1727.36C108.248 1727.36 107.42 1727.24 106.604 1727C105.812 1726.74 105.092 1726.39 104.444 1725.96C103.796 1725.52 103.256 1725.04 102.824 1724.52C102.392 1723.96 102.104 1723.41 101.96 1722.86L103.004 1722.39L102.896 1726.93H98.6115V1700.36H103.04V1712.42L102.248 1712.06C102.368 1711.48 102.632 1710.94 103.04 1710.44C103.472 1709.91 104 1709.44 104.624 1709.04C105.248 1708.6 105.932 1708.27 106.676 1708.03C107.42 1707.76 108.176 1707.63 108.944 1707.63C110.648 1707.63 112.148 1708.05 113.444 1708.89C114.764 1709.73 115.796 1710.9 116.54 1712.38C117.308 1713.87 117.692 1715.56 117.692 1717.46C117.692 1719.38 117.32 1721.08 116.576 1722.57C115.832 1724.06 114.8 1725.24 113.48 1726.1C112.184 1726.94 110.72 1727.36 109.088 1727.36ZM108.152 1723.47C109.16 1723.47 110.06 1723.22 110.852 1722.72C111.644 1722.19 112.268 1721.48 112.724 1720.59C113.18 1719.68 113.408 1718.64 113.408 1717.46C113.408 1716.31 113.18 1715.29 112.724 1714.4C112.292 1713.51 111.68 1712.82 110.888 1712.31C110.096 1711.81 109.184 1711.56 108.152 1711.56C107.12 1711.56 106.208 1711.81 105.416 1712.31C104.624 1712.82 104 1713.51 103.544 1714.4C103.088 1715.29 102.86 1716.31 102.86 1717.46C102.86 1718.64 103.088 1719.68 103.544 1720.59C104 1721.48 104.624 1722.19 105.416 1722.72C106.208 1723.22 107.12 1723.47 108.152 1723.47ZM122.143 1727V1708.03H126.571V1727H122.143ZM124.303 1704C123.415 1704 122.719 1703.78 122.215 1703.35C121.735 1702.89 121.495 1702.26 121.495 1701.44C121.495 1700.67 121.747 1700.05 122.251 1699.57C122.755 1699.09 123.439 1698.85 124.303 1698.85C125.215 1698.85 125.911 1699.08 126.391 1699.53C126.895 1699.96 127.147 1700.6 127.147 1701.44C127.147 1702.18 126.895 1702.8 126.391 1703.28C125.887 1703.76 125.191 1704 124.303 1704ZM140.322 1727.36C138.546 1727.36 136.95 1726.93 135.534 1726.06C134.118 1725.2 133.002 1724.02 132.186 1722.54C131.37 1721.05 130.962 1719.37 130.962 1717.5C130.962 1715.62 131.37 1713.94 132.186 1712.46C133.002 1710.97 134.118 1709.79 135.534 1708.93C136.95 1708.06 138.546 1707.63 140.322 1707.63C142.026 1707.63 143.574 1707.96 144.966 1708.6C146.358 1709.25 147.438 1710.15 148.206 1711.3L145.758 1714.26C145.398 1713.75 144.942 1713.3 144.39 1712.89C143.838 1712.48 143.25 1712.16 142.626 1711.92C142.002 1711.68 141.378 1711.56 140.754 1711.56C139.698 1711.56 138.75 1711.82 137.91 1712.35C137.094 1712.85 136.446 1713.56 135.966 1714.47C135.486 1715.36 135.246 1716.37 135.246 1717.5C135.246 1718.62 135.486 1719.63 135.966 1720.52C136.47 1721.41 137.142 1722.12 137.982 1722.64C138.822 1723.17 139.758 1723.44 140.79 1723.44C141.414 1723.44 142.014 1723.34 142.59 1723.15C143.19 1722.93 143.754 1722.63 144.282 1722.25C144.81 1721.86 145.302 1721.38 145.758 1720.81L148.206 1723.8C147.39 1724.85 146.262 1725.72 144.822 1726.39C143.406 1727.04 141.906 1727.36 140.322 1727.36ZM31.4817 1772V1746.8H42.4257C43.9377 1746.8 45.3177 1747.16 46.5657 1747.88C47.8137 1748.58 48.7977 1749.54 49.5177 1750.76C50.2617 1751.96 50.6337 1753.32 50.6337 1754.83C50.6337 1756.27 50.2617 1757.6 49.5177 1758.82C48.7977 1760.02 47.8137 1760.98 46.5657 1761.7C45.3417 1762.4 43.9617 1762.75 42.4257 1762.75H36.0537V1772H31.4817ZM46.0977 1772L39.6897 1760.62L44.5137 1759.72L51.6417 1772.04L46.0977 1772ZM36.0537 1758.68H42.4617C43.1577 1758.68 43.7577 1758.52 44.2617 1758.21C44.7897 1757.88 45.1977 1757.42 45.4857 1756.84C45.7737 1756.27 45.9177 1755.63 45.9177 1754.94C45.9177 1754.14 45.7377 1753.46 45.3777 1752.88C45.0177 1752.31 44.5137 1751.85 43.8657 1751.52C43.2177 1751.18 42.4737 1751.01 41.6337 1751.01H36.0537V1758.68ZM56.2952 1772V1753.03H60.7232V1772H56.2952ZM58.4552 1749C57.5672 1749 56.8712 1748.78 56.3672 1748.35C55.8872 1747.89 55.6472 1747.26 55.6472 1746.44C55.6472 1745.67 55.8992 1745.05 56.4032 1744.57C56.9072 1744.09 57.5912 1743.85 58.4552 1743.85C59.3672 1743.85 60.0632 1744.08 60.5432 1744.53C61.0472 1744.96 61.2992 1745.6 61.2992 1746.44C61.2992 1747.18 61.0472 1747.8 60.5432 1748.28C60.0392 1748.76 59.3432 1749 58.4552 1749ZM73.9701 1772.36C72.2901 1772.36 70.7781 1771.94 69.4341 1771.1C68.1141 1770.24 67.0581 1769.07 66.2661 1767.61C65.4981 1766.12 65.1141 1764.42 65.1141 1762.5C65.1141 1760.6 65.4981 1758.91 66.2661 1757.42C67.0341 1755.93 68.0781 1754.77 69.3981 1753.93C70.7421 1753.06 72.2541 1752.63 73.9341 1752.63C74.8461 1752.63 75.7221 1752.78 76.5621 1753.06C77.4261 1753.35 78.1941 1753.75 78.8661 1754.25C79.5381 1754.73 80.0661 1755.27 80.4501 1755.87C80.8581 1756.47 81.0861 1757.1 81.1341 1757.74L79.9461 1757.89V1745.36H84.3741V1772H80.0901L79.9821 1767.54L80.8461 1767.61C80.8221 1768.21 80.6061 1768.78 80.1981 1769.34C79.8141 1769.89 79.3101 1770.39 78.6861 1770.85C78.0621 1771.3 77.3301 1771.68 76.4901 1771.96C75.6741 1772.23 74.8341 1772.36 73.9701 1772.36ZM74.8341 1768.62C75.8661 1768.62 76.7781 1768.35 77.5701 1767.82C78.3621 1767.3 78.9741 1766.58 79.4061 1765.66C79.8621 1764.75 80.0901 1763.7 80.0901 1762.5C80.0901 1761.32 79.8621 1760.28 79.4061 1759.36C78.9741 1758.43 78.3621 1757.71 77.5701 1757.2C76.7781 1756.68 75.8661 1756.41 74.8341 1756.41C73.8021 1756.41 72.8901 1756.68 72.0981 1757.2C71.3061 1757.71 70.6821 1758.43 70.2261 1759.36C69.7941 1760.28 69.5781 1761.32 69.5781 1762.5C69.5781 1763.7 69.7941 1764.75 70.2261 1765.66C70.6821 1766.58 71.3061 1767.3 72.0981 1767.82C72.8901 1768.35 73.8021 1768.62 74.8341 1768.62ZM97.9326 1780.28C96.5166 1780.28 95.1006 1780.06 93.6846 1779.63C92.2926 1779.2 91.1646 1778.64 90.3006 1777.94L91.8846 1774.66C92.3886 1775.02 92.9526 1775.34 93.5766 1775.6C94.2006 1775.86 94.8606 1776.07 95.5566 1776.21C96.2766 1776.36 96.9846 1776.43 97.6806 1776.43C98.9526 1776.43 100.009 1776.22 100.849 1775.82C101.713 1775.43 102.361 1774.83 102.793 1774.02C103.225 1773.22 103.441 1772.23 103.441 1771.03V1767.54L104.089 1767.79C103.945 1768.53 103.549 1769.24 102.901 1769.91C102.253 1770.58 101.437 1771.14 100.453 1771.57C99.4686 1771.98 98.4606 1772.18 97.4286 1772.18C95.6286 1772.18 94.0326 1771.76 92.6406 1770.92C91.2726 1770.08 90.1806 1768.94 89.3646 1767.5C88.5726 1766.04 88.1766 1764.36 88.1766 1762.46C88.1766 1760.56 88.5726 1758.88 89.3646 1757.42C90.1566 1755.93 91.2366 1754.77 92.6046 1753.93C93.9966 1753.06 95.5566 1752.63 97.2846 1752.63C98.0046 1752.63 98.7006 1752.72 99.3726 1752.88C100.045 1753.05 100.657 1753.29 101.209 1753.6C101.785 1753.92 102.301 1754.26 102.757 1754.65C103.213 1755.03 103.585 1755.44 103.873 1755.87C104.161 1756.3 104.341 1756.72 104.413 1757.13L103.477 1757.42L103.549 1753.03H107.905V1770.7C107.905 1772.24 107.677 1773.6 107.221 1774.77C106.765 1775.95 106.105 1776.94 105.241 1777.76C104.377 1778.6 103.333 1779.22 102.109 1779.63C100.885 1780.06 99.4926 1780.28 97.9326 1780.28ZM98.1126 1768.4C99.1926 1768.4 100.141 1768.15 100.957 1767.64C101.797 1767.14 102.445 1766.44 102.901 1765.56C103.357 1764.67 103.585 1763.65 103.585 1762.5C103.585 1761.32 103.345 1760.29 102.865 1759.4C102.409 1758.49 101.773 1757.78 100.957 1757.28C100.141 1756.77 99.1926 1756.52 98.1126 1756.52C97.0326 1756.52 96.0846 1756.78 95.2686 1757.31C94.4526 1757.82 93.8046 1758.52 93.3246 1759.44C92.8686 1760.32 92.6406 1761.34 92.6406 1762.5C92.6406 1763.62 92.8686 1764.64 93.3246 1765.56C93.8046 1766.44 94.4526 1767.14 95.2686 1767.64C96.0846 1768.15 97.0326 1768.4 98.1126 1768.4ZM121.918 1772.36C119.926 1772.36 118.162 1771.94 116.626 1771.1C115.114 1770.26 113.926 1769.12 113.062 1767.68C112.222 1766.22 111.802 1764.55 111.802 1762.68C111.802 1761.19 112.042 1759.83 112.522 1758.61C113.002 1757.38 113.662 1756.33 114.502 1755.44C115.366 1754.53 116.386 1753.83 117.562 1753.35C118.762 1752.85 120.07 1752.6 121.486 1752.6C122.734 1752.6 123.898 1752.84 124.978 1753.32C126.058 1753.8 126.994 1754.46 127.786 1755.3C128.578 1756.11 129.178 1757.1 129.586 1758.25C130.018 1759.38 130.222 1760.61 130.198 1761.96L130.162 1763.5H114.79L113.962 1760.48H126.454L125.878 1761.09V1760.3C125.806 1759.56 125.566 1758.91 125.158 1758.36C124.75 1757.78 124.222 1757.34 123.574 1757.02C122.95 1756.69 122.254 1756.52 121.486 1756.52C120.31 1756.52 119.314 1756.75 118.498 1757.2C117.706 1757.66 117.106 1758.32 116.698 1759.18C116.29 1760.02 116.086 1761.08 116.086 1762.35C116.086 1763.58 116.338 1764.64 116.842 1765.56C117.37 1766.47 118.102 1767.18 119.038 1767.68C119.998 1768.16 121.114 1768.4 122.386 1768.4C123.274 1768.4 124.09 1768.26 124.834 1767.97C125.578 1767.68 126.382 1767.16 127.246 1766.42L129.442 1769.48C128.794 1770.08 128.05 1770.6 127.21 1771.03C126.394 1771.44 125.53 1771.76 124.618 1772C123.706 1772.24 122.806 1772.36 121.918 1772.36ZM140.455 1772.36C138.775 1772.36 137.263 1772.08 135.919 1771.53C134.599 1770.96 133.519 1770.14 132.679 1769.08L135.559 1766.6C136.279 1767.42 137.083 1768 137.971 1768.36C138.859 1768.72 139.795 1768.9 140.779 1768.9C141.187 1768.9 141.547 1768.86 141.859 1768.76C142.195 1768.66 142.483 1768.52 142.723 1768.33C142.963 1768.14 143.143 1767.92 143.263 1767.68C143.407 1767.42 143.479 1767.13 143.479 1766.82C143.479 1766.24 143.263 1765.78 142.831 1765.45C142.591 1765.28 142.207 1765.1 141.679 1764.91C141.175 1764.72 140.515 1764.52 139.699 1764.33C138.403 1764 137.323 1763.61 136.459 1763.18C135.595 1762.72 134.923 1762.22 134.443 1761.67C134.035 1761.21 133.723 1760.7 133.507 1760.12C133.315 1759.54 133.219 1758.92 133.219 1758.25C133.219 1757.41 133.399 1756.65 133.759 1755.98C134.143 1755.28 134.659 1754.68 135.307 1754.18C135.955 1753.68 136.711 1753.29 137.575 1753.03C138.439 1752.76 139.339 1752.63 140.275 1752.63C141.235 1752.63 142.159 1752.75 143.047 1752.99C143.959 1753.23 144.799 1753.58 145.567 1754.04C146.359 1754.47 147.031 1755 147.583 1755.62L145.135 1758.32C144.679 1757.89 144.175 1757.5 143.623 1757.17C143.095 1756.83 142.555 1756.57 142.003 1756.38C141.451 1756.16 140.935 1756.05 140.455 1756.05C139.999 1756.05 139.591 1756.1 139.231 1756.2C138.871 1756.27 138.571 1756.39 138.331 1756.56C138.091 1756.72 137.899 1756.94 137.755 1757.2C137.635 1757.44 137.575 1757.73 137.575 1758.07C137.599 1758.36 137.671 1758.63 137.791 1758.9C137.935 1759.14 138.127 1759.34 138.367 1759.51C138.631 1759.68 139.027 1759.87 139.555 1760.08C140.083 1760.3 140.767 1760.5 141.607 1760.7C142.783 1761.01 143.767 1761.36 144.559 1761.74C145.351 1762.12 145.975 1762.57 146.431 1763.07C146.887 1763.5 147.211 1764.01 147.403 1764.58C147.595 1765.16 147.691 1765.8 147.691 1766.49C147.691 1767.62 147.367 1768.63 146.719 1769.52C146.095 1770.4 145.231 1771.1 144.127 1771.6C143.047 1772.11 141.823 1772.36 140.455 1772.36Z"
                fill="#F6F6F6"
              />
              <g id="Vector 249" filter="url(#filter11_d_10_1969)">
                <path
                  d="M166 1739C320.548 1739 302.729 1739 420 1739"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
            <g id="Group 16">
              <g id="Vector 254" filter="url(#filter12_d_10_1969)">
                <path
                  d="M360 1364C692.179 1364 661.942 1485 914 1485"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
              <path
                id="Palatiformic Pad"
                d="M31.384 1378V1352.8H41.86C43.3 1352.8 44.596 1353.15 45.748 1353.84C46.924 1354.54 47.86 1355.49 48.556 1356.69C49.252 1357.89 49.6 1359.23 49.6 1360.72C49.6 1362.23 49.252 1363.6 48.556 1364.82C47.86 1366.02 46.924 1366.98 45.748 1367.7C44.596 1368.42 43.3 1368.78 41.86 1368.78H36.064V1378H31.384ZM36.064 1364.46H41.536C42.136 1364.46 42.676 1364.3 43.156 1363.96C43.66 1363.62 44.056 1363.18 44.344 1362.63C44.656 1362.08 44.812 1361.45 44.812 1360.76C44.812 1360.06 44.656 1359.45 44.344 1358.92C44.056 1358.37 43.66 1357.94 43.156 1357.62C42.676 1357.29 42.136 1357.12 41.536 1357.12H36.064V1364.46ZM60.5724 1378.36C59.0124 1378.36 57.5964 1377.93 56.3244 1377.06C55.0524 1376.2 54.0324 1375.02 53.2644 1373.54C52.4964 1372.05 52.1124 1370.36 52.1124 1368.46C52.1124 1366.56 52.4964 1364.87 53.2644 1363.38C54.0324 1361.9 55.0764 1360.73 56.3964 1359.89C57.7164 1359.05 59.2044 1358.63 60.8604 1358.63C61.8204 1358.63 62.6964 1358.78 63.4884 1359.06C64.2804 1359.33 64.9764 1359.71 65.5764 1360.22C66.1764 1360.72 66.6684 1361.3 67.0524 1361.94C67.4604 1362.59 67.7364 1363.29 67.8804 1364.03L66.9084 1363.78V1359.03H71.3724V1378H66.8724V1373.46L67.9164 1373.28C67.7484 1373.93 67.4364 1374.57 66.9804 1375.19C66.5484 1375.79 65.9964 1376.33 65.3244 1376.81C64.6764 1377.27 63.9444 1377.64 63.1284 1377.93C62.3364 1378.22 61.4844 1378.36 60.5724 1378.36ZM61.7964 1374.44C62.8284 1374.44 63.7404 1374.18 64.5324 1373.68C65.3244 1373.18 65.9364 1372.48 66.3684 1371.59C66.8244 1370.68 67.0524 1369.64 67.0524 1368.46C67.0524 1367.31 66.8244 1366.29 66.3684 1365.4C65.9364 1364.51 65.3244 1363.82 64.5324 1363.31C63.7404 1362.81 62.8284 1362.56 61.7964 1362.56C60.7644 1362.56 59.8524 1362.81 59.0604 1363.31C58.2924 1363.82 57.6924 1364.51 57.2604 1365.4C56.8284 1366.29 56.6124 1367.31 56.6124 1368.46C56.6124 1369.64 56.8284 1370.68 57.2604 1371.59C57.6924 1372.48 58.2924 1373.18 59.0604 1373.68C59.8524 1374.18 60.7644 1374.44 61.7964 1374.44ZM76.5421 1378V1351.36H81.0061V1378H76.5421ZM93.0216 1378.36C91.4616 1378.36 90.0456 1377.93 88.7736 1377.06C87.5016 1376.2 86.4816 1375.02 85.7136 1373.54C84.9456 1372.05 84.5616 1370.36 84.5616 1368.46C84.5616 1366.56 84.9456 1364.87 85.7136 1363.38C86.4816 1361.9 87.5256 1360.73 88.8456 1359.89C90.1656 1359.05 91.6536 1358.63 93.3096 1358.63C94.2696 1358.63 95.1456 1358.78 95.9376 1359.06C96.7296 1359.33 97.4256 1359.71 98.0256 1360.22C98.6256 1360.72 99.1176 1361.3 99.5016 1361.94C99.9096 1362.59 100.186 1363.29 100.33 1364.03L99.3576 1363.78V1359.03H103.822V1378H99.3216V1373.46L100.366 1373.28C100.198 1373.93 99.8856 1374.57 99.4296 1375.19C98.9976 1375.79 98.4456 1376.33 97.7736 1376.81C97.1256 1377.27 96.3936 1377.64 95.5776 1377.93C94.7856 1378.22 93.9336 1378.36 93.0216 1378.36ZM94.2456 1374.44C95.2776 1374.44 96.1896 1374.18 96.9816 1373.68C97.7736 1373.18 98.3856 1372.48 98.8176 1371.59C99.2736 1370.68 99.5016 1369.64 99.5016 1368.46C99.5016 1367.31 99.2736 1366.29 98.8176 1365.4C98.3856 1364.51 97.7736 1363.82 96.9816 1363.31C96.1896 1362.81 95.2776 1362.56 94.2456 1362.56C93.2136 1362.56 92.3016 1362.81 91.5096 1363.31C90.7416 1363.82 90.1416 1364.51 89.7096 1365.4C89.2776 1366.29 89.0616 1367.31 89.0616 1368.46C89.0616 1369.64 89.2776 1370.68 89.7096 1371.59C90.1416 1372.48 90.7416 1373.18 91.5096 1373.68C92.3016 1374.18 93.2136 1374.44 94.2456 1374.44ZM111.007 1378V1354.2H115.435V1378H111.007ZM107.263 1363.13V1359.03H119.575V1363.13H107.263ZM123.451 1378V1359.03H127.879V1378H123.451ZM125.611 1355C124.723 1355 124.027 1354.78 123.523 1354.35C123.043 1353.89 122.803 1353.26 122.803 1352.44C122.803 1351.67 123.055 1351.05 123.559 1350.57C124.063 1350.09 124.747 1349.85 125.611 1349.85C126.523 1349.85 127.219 1350.08 127.699 1350.53C128.203 1350.96 128.455 1351.6 128.455 1352.44C128.455 1353.18 128.203 1353.8 127.699 1354.28C127.195 1354.76 126.499 1355 125.611 1355ZM135.222 1378V1357.34C135.222 1356.18 135.474 1355.16 135.978 1354.28C136.482 1353.36 137.178 1352.66 138.066 1352.15C138.954 1351.62 139.986 1351.36 141.162 1351.36C141.978 1351.36 142.734 1351.5 143.43 1351.79C144.126 1352.06 144.714 1352.43 145.194 1352.91L143.826 1356.26C143.514 1355.99 143.178 1355.79 142.818 1355.64C142.482 1355.5 142.158 1355.43 141.846 1355.43C141.366 1355.43 140.958 1355.51 140.622 1355.68C140.31 1355.82 140.07 1356.05 139.902 1356.36C139.758 1356.68 139.686 1357.05 139.686 1357.48V1378H137.454C137.022 1378 136.614 1378 136.23 1378C135.87 1378 135.534 1378 135.222 1378ZM132.27 1363.31V1359.42H143.97V1363.31H132.27ZM155.6 1378.36C153.704 1378.36 152.012 1377.94 150.524 1377.1C149.036 1376.24 147.86 1375.06 146.996 1373.57C146.132 1372.08 145.7 1370.39 145.7 1368.5C145.7 1366.6 146.132 1364.91 146.996 1363.42C147.86 1361.93 149.036 1360.77 150.524 1359.93C152.012 1359.06 153.704 1358.63 155.6 1358.63C157.472 1358.63 159.152 1359.06 160.64 1359.93C162.128 1360.77 163.292 1361.93 164.132 1363.42C164.996 1364.91 165.428 1366.6 165.428 1368.5C165.428 1370.39 164.996 1372.08 164.132 1373.57C163.292 1375.06 162.128 1376.24 160.64 1377.1C159.152 1377.94 157.472 1378.36 155.6 1378.36ZM155.6 1374.44C156.632 1374.44 157.544 1374.17 158.336 1373.64C159.152 1373.12 159.788 1372.41 160.244 1371.52C160.724 1370.63 160.952 1369.62 160.928 1368.5C160.952 1367.34 160.724 1366.32 160.244 1365.44C159.788 1364.55 159.152 1363.85 158.336 1363.35C157.544 1362.82 156.632 1362.56 155.6 1362.56C154.568 1362.56 153.632 1362.82 152.792 1363.35C151.976 1363.85 151.34 1364.56 150.884 1365.47C150.428 1366.36 150.2 1367.37 150.2 1368.5C150.2 1369.62 150.428 1370.63 150.884 1371.52C151.34 1372.41 151.976 1373.12 152.792 1373.64C153.632 1374.17 154.568 1374.44 155.6 1374.44ZM169.389 1378V1359.03H173.745L173.817 1365.08L173.205 1363.71C173.469 1362.75 173.925 1361.88 174.573 1361.12C175.221 1360.35 175.965 1359.75 176.805 1359.32C177.669 1358.86 178.569 1358.63 179.505 1358.63C179.913 1358.63 180.297 1358.67 180.657 1358.74C181.041 1358.81 181.353 1358.9 181.593 1358.99L180.405 1363.85C180.141 1363.71 179.817 1363.59 179.433 1363.49C179.049 1363.4 178.665 1363.35 178.281 1363.35C177.681 1363.35 177.105 1363.47 176.553 1363.71C176.025 1363.92 175.557 1364.24 175.149 1364.64C174.741 1365.05 174.417 1365.53 174.177 1366.08C173.961 1366.61 173.853 1367.21 173.853 1367.88V1378H169.389ZM184.469 1378V1359.03H188.825L188.897 1362.84L188.177 1363.13C188.393 1362.51 188.717 1361.93 189.149 1361.4C189.581 1360.85 190.097 1360.38 190.697 1360C191.297 1359.59 191.933 1359.28 192.605 1359.06C193.277 1358.82 193.961 1358.7 194.657 1358.7C195.689 1358.7 196.601 1358.87 197.393 1359.21C198.209 1359.52 198.881 1360.02 199.409 1360.72C199.961 1361.42 200.369 1362.3 200.633 1363.38L199.949 1363.24L200.237 1362.66C200.501 1362.09 200.873 1361.57 201.353 1361.12C201.833 1360.64 202.373 1360.22 202.973 1359.86C203.573 1359.47 204.197 1359.18 204.845 1358.99C205.517 1358.8 206.177 1358.7 206.825 1358.7C208.265 1358.7 209.465 1358.99 210.425 1359.57C211.385 1360.14 212.105 1361.02 212.585 1362.2C213.065 1363.37 213.305 1364.82 213.305 1366.55V1378H208.841V1366.84C208.841 1365.88 208.709 1365.09 208.445 1364.46C208.205 1363.84 207.821 1363.38 207.293 1363.1C206.789 1362.78 206.153 1362.63 205.385 1362.63C204.785 1362.63 204.209 1362.74 203.657 1362.95C203.129 1363.14 202.673 1363.43 202.289 1363.82C201.905 1364.18 201.605 1364.6 201.389 1365.08C201.173 1365.56 201.065 1366.08 201.065 1366.66V1378H196.601V1366.8C196.601 1365.89 196.469 1365.14 196.205 1364.54C195.941 1363.91 195.557 1363.44 195.053 1363.13C194.549 1362.8 193.937 1362.63 193.217 1362.63C192.617 1362.63 192.053 1362.74 191.525 1362.95C190.997 1363.14 190.541 1363.42 190.157 1363.78C189.773 1364.14 189.473 1364.56 189.257 1365.04C189.041 1365.52 188.933 1366.05 188.933 1366.62V1378H184.469ZM218.725 1378V1359.03H223.153V1378H218.725ZM220.885 1355C219.997 1355 219.301 1354.78 218.797 1354.35C218.317 1353.89 218.077 1353.26 218.077 1352.44C218.077 1351.67 218.329 1351.05 218.833 1350.57C219.337 1350.09 220.021 1349.85 220.885 1349.85C221.797 1349.85 222.493 1350.08 222.973 1350.53C223.477 1350.96 223.729 1351.6 223.729 1352.44C223.729 1353.18 223.477 1353.8 222.973 1354.28C222.469 1354.76 221.773 1355 220.885 1355ZM236.904 1378.36C235.128 1378.36 233.532 1377.93 232.116 1377.06C230.7 1376.2 229.584 1375.02 228.768 1373.54C227.952 1372.05 227.544 1370.37 227.544 1368.5C227.544 1366.62 227.952 1364.94 228.768 1363.46C229.584 1361.97 230.7 1360.79 232.116 1359.93C233.532 1359.06 235.128 1358.63 236.904 1358.63C238.608 1358.63 240.156 1358.96 241.548 1359.6C242.94 1360.25 244.02 1361.15 244.788 1362.3L242.34 1365.26C241.98 1364.75 241.524 1364.3 240.972 1363.89C240.42 1363.48 239.832 1363.16 239.208 1362.92C238.584 1362.68 237.96 1362.56 237.336 1362.56C236.28 1362.56 235.332 1362.82 234.492 1363.35C233.676 1363.85 233.028 1364.56 232.548 1365.47C232.068 1366.36 231.828 1367.37 231.828 1368.5C231.828 1369.62 232.068 1370.63 232.548 1371.52C233.052 1372.41 233.724 1373.12 234.564 1373.64C235.404 1374.17 236.34 1374.44 237.372 1374.44C237.996 1374.44 238.596 1374.34 239.172 1374.15C239.772 1373.93 240.336 1373.63 240.864 1373.25C241.392 1372.86 241.884 1372.38 242.34 1371.81L244.788 1374.8C243.972 1375.85 242.844 1376.72 241.404 1377.39C239.988 1378.04 238.488 1378.36 236.904 1378.36ZM259.548 1378V1352.8H270.024C271.464 1352.8 272.76 1353.15 273.912 1353.84C275.088 1354.54 276.024 1355.49 276.72 1356.69C277.416 1357.89 277.764 1359.23 277.764 1360.72C277.764 1362.23 277.416 1363.6 276.72 1364.82C276.024 1366.02 275.088 1366.98 273.912 1367.7C272.76 1368.42 271.464 1368.78 270.024 1368.78H264.228V1378H259.548ZM264.228 1364.46H269.7C270.3 1364.46 270.84 1364.3 271.32 1363.96C271.824 1363.62 272.22 1363.18 272.508 1362.63C272.82 1362.08 272.976 1361.45 272.976 1360.76C272.976 1360.06 272.82 1359.45 272.508 1358.92C272.22 1358.37 271.824 1357.94 271.32 1357.62C270.84 1357.29 270.3 1357.12 269.7 1357.12H264.228V1364.46ZM288.736 1378.36C287.176 1378.36 285.76 1377.93 284.488 1377.06C283.216 1376.2 282.196 1375.02 281.428 1373.54C280.66 1372.05 280.276 1370.36 280.276 1368.46C280.276 1366.56 280.66 1364.87 281.428 1363.38C282.196 1361.9 283.24 1360.73 284.56 1359.89C285.88 1359.05 287.368 1358.63 289.024 1358.63C289.984 1358.63 290.86 1358.78 291.652 1359.06C292.444 1359.33 293.14 1359.71 293.74 1360.22C294.34 1360.72 294.832 1361.3 295.216 1361.94C295.624 1362.59 295.9 1363.29 296.044 1364.03L295.072 1363.78V1359.03H299.536V1378H295.036V1373.46L296.08 1373.28C295.912 1373.93 295.6 1374.57 295.144 1375.19C294.712 1375.79 294.16 1376.33 293.488 1376.81C292.84 1377.27 292.108 1377.64 291.292 1377.93C290.5 1378.22 289.648 1378.36 288.736 1378.36ZM289.96 1374.44C290.992 1374.44 291.904 1374.18 292.696 1373.68C293.488 1373.18 294.1 1372.48 294.532 1371.59C294.988 1370.68 295.216 1369.64 295.216 1368.46C295.216 1367.31 294.988 1366.29 294.532 1365.4C294.1 1364.51 293.488 1363.82 292.696 1363.31C291.904 1362.81 290.992 1362.56 289.96 1362.56C288.928 1362.56 288.016 1362.81 287.224 1363.31C286.456 1363.82 285.856 1364.51 285.424 1365.4C284.992 1366.29 284.776 1367.31 284.776 1368.46C284.776 1369.64 284.992 1370.68 285.424 1371.59C285.856 1372.48 286.456 1373.18 287.224 1373.68C288.016 1374.18 288.928 1374.44 289.96 1374.44ZM312.302 1378.36C310.622 1378.36 309.11 1377.94 307.766 1377.1C306.446 1376.24 305.39 1375.07 304.598 1373.61C303.83 1372.12 303.446 1370.42 303.446 1368.5C303.446 1366.6 303.83 1364.91 304.598 1363.42C305.366 1361.93 306.41 1360.77 307.73 1359.93C309.074 1359.06 310.586 1358.63 312.266 1358.63C313.178 1358.63 314.054 1358.78 314.894 1359.06C315.758 1359.35 316.526 1359.75 317.198 1360.25C317.87 1360.73 318.398 1361.27 318.782 1361.87C319.19 1362.47 319.418 1363.1 319.466 1363.74L318.278 1363.89V1351.36H322.706V1378H318.422L318.314 1373.54L319.178 1373.61C319.154 1374.21 318.938 1374.78 318.53 1375.34C318.146 1375.89 317.642 1376.39 317.018 1376.85C316.394 1377.3 315.662 1377.68 314.822 1377.96C314.006 1378.23 313.166 1378.36 312.302 1378.36ZM313.166 1374.62C314.198 1374.62 315.11 1374.35 315.902 1373.82C316.694 1373.3 317.306 1372.58 317.738 1371.66C318.194 1370.75 318.422 1369.7 318.422 1368.5C318.422 1367.32 318.194 1366.28 317.738 1365.36C317.306 1364.43 316.694 1363.71 315.902 1363.2C315.11 1362.68 314.198 1362.41 313.166 1362.41C312.134 1362.41 311.222 1362.68 310.43 1363.2C309.638 1363.71 309.014 1364.43 308.558 1365.36C308.126 1366.28 307.91 1367.32 307.91 1368.5C307.91 1369.7 308.126 1370.75 308.558 1371.66C309.014 1372.58 309.638 1373.3 310.43 1373.82C311.222 1374.35 312.134 1374.62 313.166 1374.62Z"
                fill="#F6F6F6"
              />
            </g>
            <g id="Group 15">
              <g id="Vector 255" filter="url(#filter13_d_10_1969)">
                <path
                  d="M335 1172C1121.23 1172 1411 1497 1411 1497"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
              <path
                id="Tentola Minora_3"
                d="M36.424 1182V1161.12H29.224V1156.8H48.52V1161.12H41.104V1182H36.424ZM57.6246 1182.36C55.6326 1182.36 53.8686 1181.94 52.3326 1181.1C50.8206 1180.26 49.6326 1179.12 48.7686 1177.68C47.9286 1176.22 47.5086 1174.55 47.5086 1172.68C47.5086 1171.19 47.7486 1169.83 48.2286 1168.61C48.7086 1167.38 49.3686 1166.33 50.2086 1165.44C51.0726 1164.53 52.0926 1163.83 53.2686 1163.35C54.4686 1162.85 55.7766 1162.6 57.1926 1162.6C58.4406 1162.6 59.6046 1162.84 60.6846 1163.32C61.7646 1163.8 62.7006 1164.46 63.4926 1165.3C64.2846 1166.11 64.8846 1167.1 65.2926 1168.25C65.7246 1169.38 65.9286 1170.61 65.9046 1171.96L65.8686 1173.5H50.4966L49.6686 1170.48H62.1606L61.5846 1171.09V1170.3C61.5126 1169.56 61.2726 1168.91 60.8646 1168.36C60.4566 1167.78 59.9286 1167.34 59.2806 1167.02C58.6566 1166.69 57.9606 1166.52 57.1926 1166.52C56.0166 1166.52 55.0206 1166.75 54.2046 1167.2C53.4126 1167.66 52.8126 1168.32 52.4046 1169.18C51.9966 1170.02 51.7926 1171.08 51.7926 1172.35C51.7926 1173.58 52.0446 1174.64 52.5486 1175.56C53.0766 1176.47 53.8086 1177.18 54.7446 1177.68C55.7046 1178.16 56.8206 1178.4 58.0926 1178.4C58.9806 1178.4 59.7966 1178.26 60.5406 1177.97C61.2846 1177.68 62.0886 1177.16 62.9526 1176.42L65.1486 1179.48C64.5006 1180.08 63.7566 1180.6 62.9166 1181.03C62.1006 1181.44 61.2366 1181.76 60.3246 1182C59.4126 1182.24 58.5126 1182.36 57.6246 1182.36ZM69.8264 1182V1163.03H74.1464L74.2184 1166.92L73.3904 1167.35C73.6304 1166.48 74.0984 1165.7 74.7944 1165.01C75.4904 1164.29 76.3184 1163.71 77.2784 1163.28C78.2384 1162.85 79.2224 1162.63 80.2304 1162.63C81.6704 1162.63 82.8704 1162.92 83.8304 1163.5C84.8144 1164.07 85.5464 1164.94 86.0264 1166.09C86.5304 1167.24 86.7824 1168.68 86.7824 1170.41V1182H82.3544V1170.73C82.3544 1169.77 82.2224 1168.98 81.9584 1168.36C81.6944 1167.71 81.2864 1167.24 80.7344 1166.95C80.1824 1166.64 79.5104 1166.5 78.7184 1166.52C78.0704 1166.52 77.4704 1166.63 76.9184 1166.84C76.3904 1167.04 75.9224 1167.32 75.5144 1167.71C75.1304 1168.07 74.8184 1168.49 74.5784 1168.97C74.3624 1169.45 74.2544 1169.98 74.2544 1170.55V1182H72.0584C71.6264 1182 71.2184 1182 70.8344 1182C70.4744 1182 70.1384 1182 69.8264 1182ZM93.8159 1182V1158.2H98.2439V1182H93.8159ZM90.0719 1167.13V1163.03H102.384V1167.13H90.0719ZM114.256 1182.36C112.36 1182.36 110.668 1181.94 109.18 1181.1C107.692 1180.24 106.516 1179.06 105.652 1177.57C104.788 1176.08 104.356 1174.39 104.356 1172.5C104.356 1170.6 104.788 1168.91 105.652 1167.42C106.516 1165.93 107.692 1164.77 109.18 1163.93C110.668 1163.06 112.36 1162.63 114.256 1162.63C116.128 1162.63 117.808 1163.06 119.296 1163.93C120.784 1164.77 121.948 1165.93 122.788 1167.42C123.652 1168.91 124.084 1170.6 124.084 1172.5C124.084 1174.39 123.652 1176.08 122.788 1177.57C121.948 1179.06 120.784 1180.24 119.296 1181.1C117.808 1181.94 116.128 1182.36 114.256 1182.36ZM114.256 1178.44C115.288 1178.44 116.2 1178.17 116.992 1177.64C117.808 1177.12 118.444 1176.41 118.9 1175.52C119.38 1174.63 119.608 1173.62 119.584 1172.5C119.608 1171.34 119.38 1170.32 118.9 1169.44C118.444 1168.55 117.808 1167.85 116.992 1167.35C116.2 1166.82 115.288 1166.56 114.256 1166.56C113.224 1166.56 112.288 1166.82 111.448 1167.35C110.632 1167.85 109.996 1168.56 109.54 1169.47C109.084 1170.36 108.856 1171.37 108.856 1172.5C108.856 1173.62 109.084 1174.63 109.54 1175.52C109.996 1176.41 110.632 1177.12 111.448 1177.64C112.288 1178.17 113.224 1178.44 114.256 1178.44ZM128.081 1182V1155.36H132.545V1182H128.081ZM144.561 1182.36C143.001 1182.36 141.585 1181.93 140.313 1181.06C139.041 1180.2 138.021 1179.02 137.253 1177.54C136.485 1176.05 136.101 1174.36 136.101 1172.46C136.101 1170.56 136.485 1168.87 137.253 1167.38C138.021 1165.9 139.065 1164.73 140.385 1163.89C141.705 1163.05 143.193 1162.63 144.849 1162.63C145.809 1162.63 146.685 1162.78 147.477 1163.06C148.269 1163.33 148.965 1163.71 149.565 1164.22C150.165 1164.72 150.657 1165.3 151.041 1165.94C151.449 1166.59 151.725 1167.29 151.869 1168.03L150.897 1167.78V1163.03H155.361V1182H150.861V1177.46L151.905 1177.28C151.737 1177.93 151.425 1178.57 150.969 1179.19C150.537 1179.79 149.985 1180.33 149.313 1180.81C148.665 1181.27 147.933 1181.64 147.117 1181.93C146.325 1182.22 145.473 1182.36 144.561 1182.36ZM145.785 1178.44C146.817 1178.44 147.729 1178.18 148.521 1177.68C149.313 1177.18 149.925 1176.48 150.357 1175.59C150.813 1174.68 151.041 1173.64 151.041 1172.46C151.041 1171.31 150.813 1170.29 150.357 1169.4C149.925 1168.51 149.313 1167.82 148.521 1167.31C147.729 1166.81 146.817 1166.56 145.785 1166.56C144.753 1166.56 143.841 1166.81 143.049 1167.31C142.281 1167.82 141.681 1168.51 141.249 1169.4C140.817 1170.29 140.601 1171.31 140.601 1172.46C140.601 1173.64 140.817 1174.68 141.249 1175.59C141.681 1176.48 142.281 1177.18 143.049 1177.68C143.841 1178.18 144.753 1178.44 145.785 1178.44ZM171.868 1182V1156.8H176.296L185.476 1171.74L182.884 1171.7L192.172 1156.8H196.384V1182H191.74V1172.53C191.74 1170.37 191.788 1168.43 191.884 1166.7C192.004 1164.97 192.196 1163.26 192.46 1161.55L193.036 1163.1L185.224 1175.16H182.848L175.288 1163.21L175.792 1161.55C176.056 1163.16 176.236 1164.82 176.332 1166.52C176.452 1168.2 176.512 1170.2 176.512 1172.53V1182H171.868ZM202.869 1182V1163.03H207.297V1182H202.869ZM205.029 1159C204.141 1159 203.445 1158.78 202.941 1158.35C202.461 1157.89 202.221 1157.26 202.221 1156.44C202.221 1155.67 202.473 1155.05 202.977 1154.57C203.481 1154.09 204.165 1153.85 205.029 1153.85C205.941 1153.85 206.637 1154.08 207.117 1154.53C207.621 1154.96 207.873 1155.6 207.873 1156.44C207.873 1157.18 207.621 1157.8 207.117 1158.28C206.613 1158.76 205.917 1159 205.029 1159ZM212.912 1182V1163.03H217.232L217.304 1166.92L216.476 1167.35C216.716 1166.48 217.184 1165.7 217.88 1165.01C218.576 1164.29 219.404 1163.71 220.364 1163.28C221.324 1162.85 222.308 1162.63 223.316 1162.63C224.756 1162.63 225.956 1162.92 226.916 1163.5C227.9 1164.07 228.632 1164.94 229.112 1166.09C229.616 1167.24 229.868 1168.68 229.868 1170.41V1182H225.44V1170.73C225.44 1169.77 225.308 1168.98 225.044 1168.36C224.78 1167.71 224.372 1167.24 223.82 1166.95C223.268 1166.64 222.596 1166.5 221.804 1166.52C221.156 1166.52 220.556 1166.63 220.004 1166.84C219.476 1167.04 219.008 1167.32 218.6 1167.71C218.216 1168.07 217.904 1168.49 217.664 1168.97C217.448 1169.45 217.34 1169.98 217.34 1170.55V1182H215.144C214.712 1182 214.304 1182 213.92 1182C213.56 1182 213.224 1182 212.912 1182ZM243.526 1182.36C241.63 1182.36 239.938 1181.94 238.45 1181.1C236.962 1180.24 235.786 1179.06 234.922 1177.57C234.058 1176.08 233.626 1174.39 233.626 1172.5C233.626 1170.6 234.058 1168.91 234.922 1167.42C235.786 1165.93 236.962 1164.77 238.45 1163.93C239.938 1163.06 241.63 1162.63 243.526 1162.63C245.398 1162.63 247.078 1163.06 248.566 1163.93C250.054 1164.77 251.218 1165.93 252.058 1167.42C252.922 1168.91 253.354 1170.6 253.354 1172.5C253.354 1174.39 252.922 1176.08 252.058 1177.57C251.218 1179.06 250.054 1180.24 248.566 1181.1C247.078 1181.94 245.398 1182.36 243.526 1182.36ZM243.526 1178.44C244.558 1178.44 245.47 1178.17 246.262 1177.64C247.078 1177.12 247.714 1176.41 248.17 1175.52C248.65 1174.63 248.878 1173.62 248.854 1172.5C248.878 1171.34 248.65 1170.32 248.17 1169.44C247.714 1168.55 247.078 1167.85 246.262 1167.35C245.47 1166.82 244.558 1166.56 243.526 1166.56C242.494 1166.56 241.558 1166.82 240.718 1167.35C239.902 1167.85 239.266 1168.56 238.81 1169.47C238.354 1170.36 238.126 1171.37 238.126 1172.5C238.126 1173.62 238.354 1174.63 238.81 1175.52C239.266 1176.41 239.902 1177.12 240.718 1177.64C241.558 1178.17 242.494 1178.44 243.526 1178.44ZM257.315 1182V1163.03H261.671L261.743 1169.08L261.131 1167.71C261.395 1166.75 261.851 1165.88 262.499 1165.12C263.147 1164.35 263.891 1163.75 264.731 1163.32C265.595 1162.86 266.495 1162.63 267.431 1162.63C267.839 1162.63 268.223 1162.67 268.583 1162.74C268.967 1162.81 269.279 1162.9 269.519 1162.99L268.331 1167.85C268.067 1167.71 267.743 1167.59 267.359 1167.49C266.975 1167.4 266.591 1167.35 266.207 1167.35C265.607 1167.35 265.031 1167.47 264.479 1167.71C263.951 1167.92 263.483 1168.24 263.075 1168.64C262.667 1169.05 262.343 1169.53 262.103 1170.08C261.887 1170.61 261.779 1171.21 261.779 1171.88V1182H257.315ZM278.822 1182.36C277.262 1182.36 275.846 1181.93 274.574 1181.06C273.302 1180.2 272.282 1179.02 271.514 1177.54C270.746 1176.05 270.362 1174.36 270.362 1172.46C270.362 1170.56 270.746 1168.87 271.514 1167.38C272.282 1165.9 273.326 1164.73 274.646 1163.89C275.966 1163.05 277.454 1162.63 279.11 1162.63C280.07 1162.63 280.946 1162.78 281.738 1163.06C282.53 1163.33 283.226 1163.71 283.826 1164.22C284.426 1164.72 284.918 1165.3 285.302 1165.94C285.71 1166.59 285.986 1167.29 286.13 1168.03L285.158 1167.78V1163.03H289.622V1182H285.122V1177.46L286.166 1177.28C285.998 1177.93 285.686 1178.57 285.23 1179.19C284.798 1179.79 284.246 1180.33 283.574 1180.81C282.926 1181.27 282.194 1181.64 281.378 1181.93C280.586 1182.22 279.734 1182.36 278.822 1182.36ZM280.046 1178.44C281.078 1178.44 281.99 1178.18 282.782 1177.68C283.574 1177.18 284.186 1176.48 284.618 1175.59C285.074 1174.68 285.302 1173.64 285.302 1172.46C285.302 1171.31 285.074 1170.29 284.618 1169.4C284.186 1168.51 283.574 1167.82 282.782 1167.31C281.99 1166.81 281.078 1166.56 280.046 1166.56C279.014 1166.56 278.102 1166.81 277.31 1167.31C276.542 1167.82 275.942 1168.51 275.51 1169.4C275.078 1170.29 274.862 1171.31 274.862 1172.46C274.862 1173.64 275.078 1174.68 275.51 1175.59C275.942 1176.48 276.542 1177.18 277.31 1177.68C278.102 1178.18 279.014 1178.44 280.046 1178.44Z"
                fill="#F6F6F6"
              />
            </g>
            <g id="Group 14">
              <g id="Vector 261" filter="url(#filter14_d_10_1969)">
                <path
                  d="M517 937C1207.51 937 1095.63 755 1462 755"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
              <path
                id="Chromatophoral Chamber"
                d="M42.076 947.36C40.252 947.36 38.584 947.048 37.072 946.424C35.56 945.8 34.252 944.912 33.148 943.76C32.044 942.584 31.18 941.204 30.556 939.62C29.956 938.012 29.656 936.26 29.656 934.364C29.656 932.54 29.98 930.848 30.628 929.288C31.276 927.728 32.176 926.36 33.328 925.184C34.48 924.008 35.824 923.096 37.36 922.448C38.896 921.8 40.564 921.476 42.364 921.476C43.588 921.476 44.776 921.656 45.928 922.016C47.08 922.376 48.136 922.88 49.096 923.528C50.056 924.152 50.86 924.884 51.508 925.724L48.52 929C47.896 928.352 47.248 927.812 46.576 927.38C45.928 926.924 45.244 926.588 44.524 926.372C43.828 926.132 43.108 926.012 42.364 926.012C41.26 926.012 40.216 926.216 39.232 926.624C38.272 927.032 37.432 927.608 36.712 928.352C36.016 929.096 35.464 929.984 35.056 931.016C34.648 932.024 34.444 933.152 34.444 934.4C34.444 935.672 34.636 936.824 35.02 937.856C35.428 938.888 35.992 939.776 36.712 940.52C37.456 941.264 38.332 941.84 39.34 942.248C40.372 942.632 41.5 942.824 42.724 942.824C43.516 942.824 44.284 942.716 45.028 942.5C45.772 942.284 46.456 941.984 47.08 941.6C47.728 941.192 48.316 940.724 48.844 940.196L51.148 943.904C50.572 944.552 49.804 945.14 48.844 945.668C47.884 946.196 46.804 946.616 45.604 946.928C44.428 947.216 43.252 947.36 42.076 947.36ZM55.2014 947V920.36H59.5934V931.916L58.7654 932.348C59.0054 931.484 59.4734 930.704 60.1694 930.008C60.8654 929.288 61.6934 928.712 62.6534 928.28C63.6134 927.848 64.5974 927.632 65.6054 927.632C67.0454 927.632 68.2454 927.92 69.2054 928.496C70.1894 929.072 70.9214 929.936 71.4014 931.088C71.9054 932.24 72.1574 933.68 72.1574 935.408V947H67.7294V935.732C67.7294 934.772 67.5974 933.98 67.3334 933.356C67.0694 932.708 66.6614 932.24 66.1094 931.952C65.5574 931.64 64.8854 931.496 64.0934 931.52C63.4454 931.52 62.8454 931.628 62.2934 931.844C61.7654 932.036 61.2974 932.324 60.8894 932.708C60.5054 933.068 60.1934 933.488 59.9534 933.968C59.7374 934.448 59.6294 934.976 59.6294 935.552V947H57.4334C57.0014 947 56.5934 947 56.2094 947C55.8494 947 55.5134 947 55.2014 947ZM77.1389 947V928.028H81.4949L81.5669 934.076L80.9549 932.708C81.2189 931.748 81.6749 930.884 82.3229 930.116C82.9709 929.348 83.7149 928.748 84.5549 928.316C85.4189 927.86 86.3189 927.632 87.2549 927.632C87.6629 927.632 88.0469 927.668 88.4069 927.74C88.7909 927.812 89.1029 927.896 89.3429 927.992L88.1549 932.852C87.8909 932.708 87.5669 932.588 87.1829 932.492C86.7989 932.396 86.4149 932.348 86.0309 932.348C85.4309 932.348 84.8549 932.468 84.3029 932.708C83.7749 932.924 83.3069 933.236 82.8989 933.644C82.4909 934.052 82.1669 934.532 81.9269 935.084C81.7109 935.612 81.6029 936.212 81.6029 936.884V947H77.1389ZM100.159 947.36C98.2626 947.36 96.5706 946.94 95.0826 946.1C93.5946 945.236 92.4186 944.06 91.5546 942.572C90.6906 941.084 90.2586 939.392 90.2586 937.496C90.2586 935.6 90.6906 933.908 91.5546 932.42C92.4186 930.932 93.5946 929.768 95.0826 928.928C96.5706 928.064 98.2626 927.632 100.159 927.632C102.031 927.632 103.711 928.064 105.199 928.928C106.687 929.768 107.851 930.932 108.691 932.42C109.555 933.908 109.987 935.6 109.987 937.496C109.987 939.392 109.555 941.084 108.691 942.572C107.851 944.06 106.687 945.236 105.199 946.1C103.711 946.94 102.031 947.36 100.159 947.36ZM100.159 943.436C101.191 943.436 102.103 943.172 102.895 942.644C103.711 942.116 104.347 941.408 104.803 940.52C105.283 939.632 105.511 938.624 105.487 937.496C105.511 936.344 105.283 935.324 104.803 934.436C104.347 933.548 103.711 932.852 102.895 932.348C102.103 931.82 101.191 931.556 100.159 931.556C99.1266 931.556 98.1906 931.82 97.3506 932.348C96.5346 932.852 95.8986 933.56 95.4426 934.472C94.9866 935.36 94.7586 936.368 94.7586 937.496C94.7586 938.624 94.9866 939.632 95.4426 940.52C95.8986 941.408 96.5346 942.116 97.3506 942.644C98.1906 943.172 99.1266 943.436 100.159 943.436ZM113.875 947V928.028H118.231L118.303 931.844L117.583 932.132C117.799 931.508 118.123 930.932 118.555 930.404C118.987 929.852 119.503 929.384 120.103 929C120.703 928.592 121.339 928.28 122.011 928.064C122.683 927.824 123.367 927.704 124.063 927.704C125.095 927.704 126.007 927.872 126.799 928.208C127.615 928.52 128.287 929.024 128.815 929.72C129.367 930.416 129.775 931.304 130.039 932.384L129.355 932.24L129.643 931.664C129.907 931.088 130.279 930.572 130.759 930.116C131.239 929.636 131.779 929.216 132.379 928.856C132.979 928.472 133.603 928.184 134.251 927.992C134.923 927.8 135.583 927.704 136.231 927.704C137.671 927.704 138.871 927.992 139.831 928.568C140.791 929.144 141.511 930.02 141.991 931.196C142.471 932.372 142.711 933.824 142.711 935.552V947H138.247V935.84C138.247 934.88 138.115 934.088 137.851 933.464C137.611 932.84 137.227 932.384 136.699 932.096C136.195 931.784 135.559 931.628 134.791 931.628C134.191 931.628 133.615 931.736 133.063 931.952C132.535 932.144 132.079 932.432 131.695 932.816C131.311 933.176 131.011 933.596 130.795 934.076C130.579 934.556 130.471 935.084 130.471 935.66V947H126.007V935.804C126.007 934.892 125.875 934.136 125.611 933.536C125.347 932.912 124.963 932.444 124.459 932.132C123.955 931.796 123.343 931.628 122.623 931.628C122.023 931.628 121.459 931.736 120.931 931.952C120.403 932.144 119.947 932.42 119.563 932.78C119.179 933.14 118.879 933.56 118.663 934.04C118.447 934.52 118.339 935.048 118.339 935.624V947H113.875ZM154.791 947.36C153.231 947.36 151.815 946.928 150.543 946.064C149.271 945.2 148.251 944.024 147.483 942.536C146.715 941.048 146.331 939.356 146.331 937.46C146.331 935.564 146.715 933.872 147.483 932.384C148.251 930.896 149.295 929.732 150.615 928.892C151.935 928.052 153.423 927.632 155.079 927.632C156.039 927.632 156.915 927.776 157.707 928.064C158.499 928.328 159.195 928.712 159.795 929.216C160.395 929.72 160.887 930.296 161.271 930.944C161.679 931.592 161.955 932.288 162.099 933.032L161.127 932.78V928.028H165.591V947H161.091V942.464L162.135 942.284C161.967 942.932 161.655 943.568 161.199 944.192C160.767 944.792 160.215 945.332 159.543 945.812C158.895 946.268 158.163 946.64 157.347 946.928C156.555 947.216 155.703 947.36 154.791 947.36ZM156.015 943.436C157.047 943.436 157.959 943.184 158.751 942.68C159.543 942.176 160.155 941.48 160.587 940.592C161.043 939.68 161.271 938.636 161.271 937.46C161.271 936.308 161.043 935.288 160.587 934.4C160.155 933.512 159.543 932.816 158.751 932.312C157.959 931.808 157.047 931.556 156.015 931.556C154.983 931.556 154.071 931.808 153.279 932.312C152.511 932.816 151.911 933.512 151.479 934.4C151.047 935.288 150.831 936.308 150.831 937.46C150.831 938.636 151.047 939.68 151.479 940.592C151.911 941.48 152.511 942.176 153.279 942.68C154.071 943.184 154.983 943.436 156.015 943.436ZM172.777 947V923.204H177.205V947H172.777ZM169.033 932.132V928.028H181.345V932.132H169.033ZM193.217 947.36C191.321 947.36 189.629 946.94 188.141 946.1C186.653 945.236 185.477 944.06 184.613 942.572C183.749 941.084 183.317 939.392 183.317 937.496C183.317 935.6 183.749 933.908 184.613 932.42C185.477 930.932 186.653 929.768 188.141 928.928C189.629 928.064 191.321 927.632 193.217 927.632C195.089 927.632 196.769 928.064 198.257 928.928C199.745 929.768 200.909 930.932 201.749 932.42C202.613 933.908 203.045 935.6 203.045 937.496C203.045 939.392 202.613 941.084 201.749 942.572C200.909 944.06 199.745 945.236 198.257 946.1C196.769 946.94 195.089 947.36 193.217 947.36ZM193.217 943.436C194.249 943.436 195.161 943.172 195.953 942.644C196.769 942.116 197.405 941.408 197.861 940.52C198.341 939.632 198.569 938.624 198.545 937.496C198.569 936.344 198.341 935.324 197.861 934.436C197.405 933.548 196.769 932.852 195.953 932.348C195.161 931.82 194.249 931.556 193.217 931.556C192.185 931.556 191.249 931.82 190.409 932.348C189.593 932.852 188.957 933.56 188.501 934.472C188.045 935.36 187.817 936.368 187.817 937.496C187.817 938.624 188.045 939.632 188.501 940.52C188.957 941.408 189.593 942.116 190.409 942.644C191.249 943.172 192.185 943.436 193.217 943.436ZM207.006 954.92V928.028H211.362L211.434 932.348L210.678 932.024C210.822 931.28 211.23 930.584 211.902 929.936C212.574 929.264 213.39 928.724 214.35 928.316C215.334 927.908 216.354 927.704 217.41 927.704C219.09 927.704 220.578 928.124 221.874 928.964C223.194 929.804 224.226 930.956 224.97 932.42C225.738 933.884 226.122 935.576 226.122 937.496C226.122 939.392 225.738 941.084 224.97 942.572C224.226 944.036 223.194 945.2 221.874 946.064C220.578 946.904 219.114 947.324 217.482 947.324C216.378 947.324 215.31 947.108 214.278 946.676C213.27 946.244 212.406 945.68 211.686 944.984C210.99 944.288 210.558 943.556 210.39 942.788L211.47 942.284V954.92H207.006ZM216.582 943.4C217.59 943.4 218.49 943.148 219.282 942.644C220.074 942.14 220.686 941.444 221.118 940.556C221.574 939.668 221.802 938.648 221.802 937.496C221.802 936.344 221.586 935.336 221.154 934.472C220.722 933.584 220.11 932.888 219.318 932.384C218.526 931.88 217.614 931.628 216.582 931.628C215.526 931.628 214.602 931.88 213.81 932.384C213.042 932.864 212.43 933.548 211.974 934.436C211.518 935.324 211.29 936.344 211.29 937.496C211.29 938.648 211.518 939.668 211.974 940.556C212.43 941.444 213.042 942.14 213.81 942.644C214.602 943.148 215.526 943.4 216.582 943.4ZM230.069 947V920.36H234.461V931.916L233.633 932.348C233.873 931.484 234.341 930.704 235.037 930.008C235.733 929.288 236.561 928.712 237.521 928.28C238.481 927.848 239.465 927.632 240.473 927.632C241.913 927.632 243.113 927.92 244.073 928.496C245.057 929.072 245.789 929.936 246.269 931.088C246.773 932.24 247.025 933.68 247.025 935.408V947H242.597V935.732C242.597 934.772 242.465 933.98 242.201 933.356C241.937 932.708 241.529 932.24 240.977 931.952C240.425 931.64 239.753 931.496 238.961 931.52C238.313 931.52 237.713 931.628 237.161 931.844C236.633 932.036 236.165 932.324 235.757 932.708C235.373 933.068 235.061 933.488 234.821 933.968C234.605 934.448 234.497 934.976 234.497 935.552V947H232.301C231.869 947 231.461 947 231.077 947C230.717 947 230.381 947 230.069 947ZM260.682 947.36C258.786 947.36 257.094 946.94 255.606 946.1C254.118 945.236 252.942 944.06 252.078 942.572C251.214 941.084 250.782 939.392 250.782 937.496C250.782 935.6 251.214 933.908 252.078 932.42C252.942 930.932 254.118 929.768 255.606 928.928C257.094 928.064 258.786 927.632 260.682 927.632C262.554 927.632 264.234 928.064 265.722 928.928C267.21 929.768 268.374 930.932 269.214 932.42C270.078 933.908 270.51 935.6 270.51 937.496C270.51 939.392 270.078 941.084 269.214 942.572C268.374 944.06 267.21 945.236 265.722 946.1C264.234 946.94 262.554 947.36 260.682 947.36ZM260.682 943.436C261.714 943.436 262.626 943.172 263.418 942.644C264.234 942.116 264.87 941.408 265.326 940.52C265.806 939.632 266.034 938.624 266.01 937.496C266.034 936.344 265.806 935.324 265.326 934.436C264.87 933.548 264.234 932.852 263.418 932.348C262.626 931.82 261.714 931.556 260.682 931.556C259.65 931.556 258.714 931.82 257.874 932.348C257.058 932.852 256.422 933.56 255.966 934.472C255.51 935.36 255.282 936.368 255.282 937.496C255.282 938.624 255.51 939.632 255.966 940.52C256.422 941.408 257.058 942.116 257.874 942.644C258.714 943.172 259.65 943.436 260.682 943.436ZM274.471 947V928.028H278.827L278.899 934.076L278.287 932.708C278.551 931.748 279.007 930.884 279.655 930.116C280.303 929.348 281.047 928.748 281.887 928.316C282.751 927.86 283.651 927.632 284.587 927.632C284.995 927.632 285.379 927.668 285.739 927.74C286.123 927.812 286.435 927.896 286.675 927.992L285.487 932.852C285.223 932.708 284.899 932.588 284.515 932.492C284.131 932.396 283.747 932.348 283.363 932.348C282.763 932.348 282.187 932.468 281.635 932.708C281.107 932.924 280.639 933.236 280.231 933.644C279.823 934.052 279.499 934.532 279.259 935.084C279.043 935.612 278.935 936.212 278.935 936.884V947H274.471ZM295.979 947.36C294.419 947.36 293.003 946.928 291.731 946.064C290.459 945.2 289.439 944.024 288.671 942.536C287.903 941.048 287.519 939.356 287.519 937.46C287.519 935.564 287.903 933.872 288.671 932.384C289.439 930.896 290.483 929.732 291.803 928.892C293.123 928.052 294.611 927.632 296.267 927.632C297.227 927.632 298.103 927.776 298.895 928.064C299.687 928.328 300.383 928.712 300.983 929.216C301.583 929.72 302.075 930.296 302.459 930.944C302.867 931.592 303.143 932.288 303.287 933.032L302.315 932.78V928.028H306.779V947H302.279V942.464L303.323 942.284C303.155 942.932 302.843 943.568 302.387 944.192C301.955 944.792 301.403 945.332 300.731 945.812C300.083 946.268 299.351 946.64 298.535 946.928C297.743 947.216 296.891 947.36 295.979 947.36ZM297.203 943.436C298.235 943.436 299.147 943.184 299.939 942.68C300.731 942.176 301.343 941.48 301.775 940.592C302.231 939.68 302.459 938.636 302.459 937.46C302.459 936.308 302.231 935.288 301.775 934.4C301.343 933.512 300.731 932.816 299.939 932.312C299.147 931.808 298.235 931.556 297.203 931.556C296.171 931.556 295.259 931.808 294.467 932.312C293.699 932.816 293.099 933.512 292.667 934.4C292.235 935.288 292.019 936.308 292.019 937.46C292.019 938.636 292.235 939.68 292.667 940.592C293.099 941.48 293.699 942.176 294.467 942.68C295.259 943.184 296.171 943.436 297.203 943.436ZM311.948 947V920.36H316.412V947H311.948ZM343.681 947.36C341.857 947.36 340.189 947.048 338.677 946.424C337.165 945.8 335.857 944.912 334.753 943.76C333.649 942.584 332.785 941.204 332.161 939.62C331.561 938.012 331.261 936.26 331.261 934.364C331.261 932.54 331.585 930.848 332.233 929.288C332.881 927.728 333.781 926.36 334.933 925.184C336.085 924.008 337.429 923.096 338.965 922.448C340.501 921.8 342.169 921.476 343.969 921.476C345.193 921.476 346.381 921.656 347.533 922.016C348.685 922.376 349.741 922.88 350.701 923.528C351.661 924.152 352.465 924.884 353.113 925.724L350.125 929C349.501 928.352 348.853 927.812 348.181 927.38C347.533 926.924 346.849 926.588 346.129 926.372C345.433 926.132 344.713 926.012 343.969 926.012C342.865 926.012 341.821 926.216 340.837 926.624C339.877 927.032 339.037 927.608 338.317 928.352C337.621 929.096 337.069 929.984 336.661 931.016C336.253 932.024 336.049 933.152 336.049 934.4C336.049 935.672 336.241 936.824 336.625 937.856C337.033 938.888 337.597 939.776 338.317 940.52C339.061 941.264 339.937 941.84 340.945 942.248C341.977 942.632 343.105 942.824 344.329 942.824C345.121 942.824 345.889 942.716 346.633 942.5C347.377 942.284 348.061 941.984 348.685 941.6C349.333 941.192 349.921 940.724 350.449 940.196L352.753 943.904C352.177 944.552 351.409 945.14 350.449 945.668C349.489 946.196 348.409 946.616 347.209 946.928C346.033 947.216 344.857 947.36 343.681 947.36ZM356.807 947V920.36H361.199V931.916L360.371 932.348C360.611 931.484 361.079 930.704 361.775 930.008C362.471 929.288 363.299 928.712 364.259 928.28C365.219 927.848 366.203 927.632 367.211 927.632C368.651 927.632 369.851 927.92 370.811 928.496C371.795 929.072 372.527 929.936 373.007 931.088C373.511 932.24 373.763 933.68 373.763 935.408V947H369.335V935.732C369.335 934.772 369.203 933.98 368.939 933.356C368.675 932.708 368.267 932.24 367.715 931.952C367.163 931.64 366.491 931.496 365.699 931.52C365.051 931.52 364.451 931.628 363.899 931.844C363.371 932.036 362.903 932.324 362.495 932.708C362.111 933.068 361.799 933.488 361.559 933.968C361.343 934.448 361.235 934.976 361.235 935.552V947H359.039C358.607 947 358.199 947 357.815 947C357.455 947 357.119 947 356.807 947ZM385.908 947.36C384.348 947.36 382.932 946.928 381.66 946.064C380.388 945.2 379.368 944.024 378.6 942.536C377.832 941.048 377.448 939.356 377.448 937.46C377.448 935.564 377.832 933.872 378.6 932.384C379.368 930.896 380.412 929.732 381.732 928.892C383.052 928.052 384.54 927.632 386.196 927.632C387.156 927.632 388.032 927.776 388.824 928.064C389.616 928.328 390.312 928.712 390.912 929.216C391.512 929.72 392.004 930.296 392.388 930.944C392.796 931.592 393.072 932.288 393.216 933.032L392.244 932.78V928.028H396.708V947H392.208V942.464L393.252 942.284C393.084 942.932 392.772 943.568 392.316 944.192C391.884 944.792 391.332 945.332 390.66 945.812C390.012 946.268 389.28 946.64 388.464 946.928C387.672 947.216 386.82 947.36 385.908 947.36ZM387.132 943.436C388.164 943.436 389.076 943.184 389.868 942.68C390.66 942.176 391.272 941.48 391.704 940.592C392.16 939.68 392.388 938.636 392.388 937.46C392.388 936.308 392.16 935.288 391.704 934.4C391.272 933.512 390.66 932.816 389.868 932.312C389.076 931.808 388.164 931.556 387.132 931.556C386.1 931.556 385.188 931.808 384.396 932.312C383.628 932.816 383.028 933.512 382.596 934.4C382.164 935.288 381.948 936.308 381.948 937.46C381.948 938.636 382.164 939.68 382.596 940.592C383.028 941.48 383.628 942.176 384.396 942.68C385.188 943.184 386.1 943.436 387.132 943.436ZM401.77 947V928.028H406.126L406.198 931.844L405.478 932.132C405.694 931.508 406.018 930.932 406.45 930.404C406.882 929.852 407.398 929.384 407.998 929C408.598 928.592 409.234 928.28 409.906 928.064C410.578 927.824 411.262 927.704 411.958 927.704C412.99 927.704 413.902 927.872 414.694 928.208C415.51 928.52 416.182 929.024 416.71 929.72C417.262 930.416 417.67 931.304 417.934 932.384L417.25 932.24L417.538 931.664C417.802 931.088 418.174 930.572 418.654 930.116C419.134 929.636 419.674 929.216 420.274 928.856C420.874 928.472 421.498 928.184 422.146 927.992C422.818 927.8 423.478 927.704 424.126 927.704C425.566 927.704 426.766 927.992 427.726 928.568C428.686 929.144 429.406 930.02 429.886 931.196C430.366 932.372 430.606 933.824 430.606 935.552V947H426.142V935.84C426.142 934.88 426.01 934.088 425.746 933.464C425.506 932.84 425.122 932.384 424.594 932.096C424.09 931.784 423.454 931.628 422.686 931.628C422.086 931.628 421.51 931.736 420.958 931.952C420.43 932.144 419.974 932.432 419.59 932.816C419.206 933.176 418.906 933.596 418.69 934.076C418.474 934.556 418.366 935.084 418.366 935.66V947H413.902V935.804C413.902 934.892 413.77 934.136 413.506 933.536C413.242 932.912 412.858 932.444 412.354 932.132C411.85 931.796 411.238 931.628 410.518 931.628C409.918 931.628 409.354 931.736 408.826 931.952C408.298 932.144 407.842 932.42 407.458 932.78C407.074 933.14 406.774 933.56 406.558 934.04C406.342 934.52 406.234 935.048 406.234 935.624V947H401.77ZM445.998 947.36C445.158 947.36 444.33 947.24 443.514 947C442.722 946.736 442.002 946.388 441.354 945.956C440.706 945.524 440.166 945.044 439.734 944.516C439.302 943.964 439.014 943.412 438.87 942.86L439.914 942.392L439.806 946.928H435.522V920.36H439.95V932.42L439.158 932.06C439.278 931.484 439.542 930.944 439.95 930.44C440.382 929.912 440.91 929.444 441.534 929.036C442.158 928.604 442.842 928.268 443.586 928.028C444.33 927.764 445.086 927.632 445.854 927.632C447.558 927.632 449.058 928.052 450.354 928.892C451.674 929.732 452.706 930.896 453.45 932.384C454.218 933.872 454.602 935.564 454.602 937.46C454.602 939.38 454.23 941.084 453.486 942.572C452.742 944.06 451.71 945.236 450.39 946.1C449.094 946.94 447.63 947.36 445.998 947.36ZM445.062 943.472C446.07 943.472 446.97 943.22 447.762 942.716C448.554 942.188 449.178 941.48 449.634 940.592C450.09 939.68 450.318 938.636 450.318 937.46C450.318 936.308 450.09 935.288 449.634 934.4C449.202 933.512 448.59 932.816 447.798 932.312C447.006 931.808 446.094 931.556 445.062 931.556C444.03 931.556 443.118 931.808 442.326 932.312C441.534 932.816 440.91 933.512 440.454 934.4C439.998 935.288 439.77 936.308 439.77 937.46C439.77 938.636 439.998 939.68 440.454 940.592C440.91 941.48 441.534 942.188 442.326 942.716C443.118 943.22 444.03 943.472 445.062 943.472ZM467.441 947.36C465.449 947.36 463.685 946.94 462.149 946.1C460.637 945.26 459.449 944.12 458.585 942.68C457.745 941.216 457.325 939.548 457.325 937.676C457.325 936.188 457.565 934.832 458.045 933.608C458.525 932.384 459.185 931.328 460.025 930.44C460.889 929.528 461.909 928.832 463.085 928.352C464.285 927.848 465.593 927.596 467.009 927.596C468.257 927.596 469.421 927.836 470.501 928.316C471.581 928.796 472.517 929.456 473.309 930.296C474.101 931.112 474.701 932.096 475.109 933.248C475.541 934.376 475.745 935.612 475.721 936.956L475.685 938.504H460.313L459.485 935.48H471.977L471.401 936.092V935.3C471.329 934.556 471.089 933.908 470.681 933.356C470.273 932.78 469.745 932.336 469.097 932.024C468.473 931.688 467.777 931.52 467.009 931.52C465.833 931.52 464.837 931.748 464.021 932.204C463.229 932.66 462.629 933.32 462.221 934.184C461.813 935.024 461.609 936.08 461.609 937.352C461.609 938.576 461.861 939.644 462.365 940.556C462.893 941.468 463.625 942.176 464.561 942.68C465.521 943.16 466.637 943.4 467.909 943.4C468.797 943.4 469.613 943.256 470.357 942.968C471.101 942.68 471.905 942.164 472.769 941.42L474.965 944.48C474.317 945.08 473.573 945.596 472.733 946.028C471.917 946.436 471.053 946.76 470.141 947C469.229 947.24 468.329 947.36 467.441 947.36ZM479.643 947V928.028H483.999L484.071 934.076L483.459 932.708C483.723 931.748 484.179 930.884 484.827 930.116C485.475 929.348 486.219 928.748 487.059 928.316C487.923 927.86 488.823 927.632 489.759 927.632C490.167 927.632 490.551 927.668 490.911 927.74C491.295 927.812 491.607 927.896 491.847 927.992L490.659 932.852C490.395 932.708 490.071 932.588 489.687 932.492C489.303 932.396 488.919 932.348 488.535 932.348C487.935 932.348 487.359 932.468 486.807 932.708C486.279 932.924 485.811 933.236 485.403 933.644C484.995 934.052 484.671 934.532 484.431 935.084C484.215 935.612 484.107 936.212 484.107 936.884V947H479.643Z"
                fill="#F6F6F6"
              />
            </g>
            <g id="Group 13">
              <g id="Vector 256" filter="url(#filter15_d_10_1969)">
                <path
                  d="M287 645C466.88 645 450.507 644 587 644"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
              <path
                id="Photophone"
                d="M31.384 651V625.8H41.86C43.3 625.8 44.596 626.148 45.748 626.844C46.924 627.54 47.86 628.488 48.556 629.688C49.252 630.888 49.6 632.232 49.6 633.72C49.6 635.232 49.252 636.6 48.556 637.824C47.86 639.024 46.924 639.984 45.748 640.704C44.596 641.424 43.3 641.784 41.86 641.784H36.064V651H31.384ZM36.064 637.464H41.536C42.136 637.464 42.676 637.296 43.156 636.96C43.66 636.624 44.056 636.18 44.344 635.628C44.656 635.076 44.812 634.452 44.812 633.756C44.812 633.06 44.656 632.448 44.344 631.92C44.056 631.368 43.66 630.936 43.156 630.624C42.676 630.288 42.136 630.12 41.536 630.12H36.064V637.464ZM53.76 651V624.36H58.152V635.916L57.324 636.348C57.564 635.484 58.032 634.704 58.728 634.008C59.424 633.288 60.252 632.712 61.212 632.28C62.172 631.848 63.156 631.632 64.164 631.632C65.604 631.632 66.804 631.92 67.764 632.496C68.748 633.072 69.48 633.936 69.96 635.088C70.464 636.24 70.716 637.68 70.716 639.408V651H66.288V639.732C66.288 638.772 66.156 637.98 65.892 637.356C65.628 636.708 65.22 636.24 64.668 635.952C64.116 635.64 63.444 635.496 62.652 635.52C62.004 635.52 61.404 635.628 60.852 635.844C60.324 636.036 59.856 636.324 59.448 636.708C59.064 637.068 58.752 637.488 58.512 637.968C58.296 638.448 58.188 638.976 58.188 639.552V651H55.992C55.56 651 55.152 651 54.768 651C54.408 651 54.072 651 53.76 651ZM84.3735 651.36C82.4775 651.36 80.7855 650.94 79.2975 650.1C77.8095 649.236 76.6335 648.06 75.7695 646.572C74.9055 645.084 74.4735 643.392 74.4735 641.496C74.4735 639.6 74.9055 637.908 75.7695 636.42C76.6335 634.932 77.8095 633.768 79.2975 632.928C80.7855 632.064 82.4775 631.632 84.3735 631.632C86.2455 631.632 87.9255 632.064 89.4135 632.928C90.9015 633.768 92.0655 634.932 92.9055 636.42C93.7695 637.908 94.2015 639.6 94.2015 641.496C94.2015 643.392 93.7695 645.084 92.9055 646.572C92.0655 648.06 90.9015 649.236 89.4135 650.1C87.9255 650.94 86.2455 651.36 84.3735 651.36ZM84.3735 647.436C85.4055 647.436 86.3175 647.172 87.1095 646.644C87.9255 646.116 88.5615 645.408 89.0175 644.52C89.4975 643.632 89.7255 642.624 89.7015 641.496C89.7255 640.344 89.4975 639.324 89.0175 638.436C88.5615 637.548 87.9255 636.852 87.1095 636.348C86.3175 635.82 85.4055 635.556 84.3735 635.556C83.3415 635.556 82.4055 635.82 81.5655 636.348C80.7495 636.852 80.1135 637.56 79.6575 638.472C79.2015 639.36 78.9735 640.368 78.9735 641.496C78.9735 642.624 79.2015 643.632 79.6575 644.52C80.1135 645.408 80.7495 646.116 81.5655 646.644C82.4055 647.172 83.3415 647.436 84.3735 647.436ZM100.214 651V627.204H104.642V651H100.214ZM96.4703 636.132V632.028H108.782V636.132H96.4703ZM120.655 651.36C118.759 651.36 117.067 650.94 115.579 650.1C114.091 649.236 112.915 648.06 112.051 646.572C111.187 645.084 110.755 643.392 110.755 641.496C110.755 639.6 111.187 637.908 112.051 636.42C112.915 634.932 114.091 633.768 115.579 632.928C117.067 632.064 118.759 631.632 120.655 631.632C122.527 631.632 124.207 632.064 125.695 632.928C127.183 633.768 128.347 634.932 129.187 636.42C130.051 637.908 130.483 639.6 130.483 641.496C130.483 643.392 130.051 645.084 129.187 646.572C128.347 648.06 127.183 649.236 125.695 650.1C124.207 650.94 122.527 651.36 120.655 651.36ZM120.655 647.436C121.687 647.436 122.599 647.172 123.391 646.644C124.207 646.116 124.843 645.408 125.299 644.52C125.779 643.632 126.007 642.624 125.983 641.496C126.007 640.344 125.779 639.324 125.299 638.436C124.843 637.548 124.207 636.852 123.391 636.348C122.599 635.82 121.687 635.556 120.655 635.556C119.623 635.556 118.687 635.82 117.847 636.348C117.031 636.852 116.395 637.56 115.939 638.472C115.483 639.36 115.255 640.368 115.255 641.496C115.255 642.624 115.483 643.632 115.939 644.52C116.395 645.408 117.031 646.116 117.847 646.644C118.687 647.172 119.623 647.436 120.655 647.436ZM134.444 658.92V632.028H138.8L138.872 636.348L138.116 636.024C138.26 635.28 138.668 634.584 139.34 633.936C140.012 633.264 140.828 632.724 141.788 632.316C142.772 631.908 143.792 631.704 144.848 631.704C146.528 631.704 148.016 632.124 149.312 632.964C150.632 633.804 151.664 634.956 152.408 636.42C153.176 637.884 153.56 639.576 153.56 641.496C153.56 643.392 153.176 645.084 152.408 646.572C151.664 648.036 150.632 649.2 149.312 650.064C148.016 650.904 146.552 651.324 144.92 651.324C143.816 651.324 142.748 651.108 141.716 650.676C140.708 650.244 139.844 649.68 139.124 648.984C138.428 648.288 137.996 647.556 137.828 646.788L138.908 646.284V658.92H134.444ZM144.02 647.4C145.028 647.4 145.928 647.148 146.72 646.644C147.512 646.14 148.124 645.444 148.556 644.556C149.012 643.668 149.24 642.648 149.24 641.496C149.24 640.344 149.024 639.336 148.592 638.472C148.16 637.584 147.548 636.888 146.756 636.384C145.964 635.88 145.052 635.628 144.02 635.628C142.964 635.628 142.04 635.88 141.248 636.384C140.48 636.864 139.868 637.548 139.412 638.436C138.956 639.324 138.728 640.344 138.728 641.496C138.728 642.648 138.956 643.668 139.412 644.556C139.868 645.444 140.48 646.14 141.248 646.644C142.04 647.148 142.964 647.4 144.02 647.4ZM157.506 651V624.36H161.898V635.916L161.07 636.348C161.31 635.484 161.778 634.704 162.474 634.008C163.17 633.288 163.998 632.712 164.958 632.28C165.918 631.848 166.902 631.632 167.91 631.632C169.35 631.632 170.55 631.92 171.51 632.496C172.494 633.072 173.226 633.936 173.706 635.088C174.21 636.24 174.462 637.68 174.462 639.408V651H170.034V639.732C170.034 638.772 169.902 637.98 169.638 637.356C169.374 636.708 168.966 636.24 168.414 635.952C167.862 635.64 167.19 635.496 166.398 635.52C165.75 635.52 165.15 635.628 164.598 635.844C164.07 636.036 163.602 636.324 163.194 636.708C162.81 637.068 162.498 637.488 162.258 637.968C162.042 638.448 161.934 638.976 161.934 639.552V651H159.738C159.306 651 158.898 651 158.514 651C158.154 651 157.818 651 157.506 651ZM188.12 651.36C186.224 651.36 184.532 650.94 183.044 650.1C181.556 649.236 180.38 648.06 179.516 646.572C178.652 645.084 178.22 643.392 178.22 641.496C178.22 639.6 178.652 637.908 179.516 636.42C180.38 634.932 181.556 633.768 183.044 632.928C184.532 632.064 186.224 631.632 188.12 631.632C189.992 631.632 191.672 632.064 193.16 632.928C194.648 633.768 195.812 634.932 196.652 636.42C197.516 637.908 197.948 639.6 197.948 641.496C197.948 643.392 197.516 645.084 196.652 646.572C195.812 648.06 194.648 649.236 193.16 650.1C191.672 650.94 189.992 651.36 188.12 651.36ZM188.12 647.436C189.152 647.436 190.064 647.172 190.856 646.644C191.672 646.116 192.308 645.408 192.764 644.52C193.244 643.632 193.472 642.624 193.448 641.496C193.472 640.344 193.244 639.324 192.764 638.436C192.308 637.548 191.672 636.852 190.856 636.348C190.064 635.82 189.152 635.556 188.12 635.556C187.088 635.556 186.152 635.82 185.312 636.348C184.496 636.852 183.86 637.56 183.404 638.472C182.948 639.36 182.72 640.368 182.72 641.496C182.72 642.624 182.948 643.632 183.404 644.52C183.86 645.408 184.496 646.116 185.312 646.644C186.152 647.172 187.088 647.436 188.12 647.436ZM201.908 651V632.028H206.228L206.3 635.916L205.472 636.348C205.712 635.484 206.18 634.704 206.876 634.008C207.572 633.288 208.4 632.712 209.36 632.28C210.32 631.848 211.304 631.632 212.312 631.632C213.752 631.632 214.952 631.92 215.912 632.496C216.896 633.072 217.628 633.936 218.108 635.088C218.612 636.24 218.864 637.68 218.864 639.408V651H214.436V639.732C214.436 638.772 214.304 637.98 214.04 637.356C213.776 636.708 213.368 636.24 212.816 635.952C212.264 635.64 211.592 635.496 210.8 635.52C210.152 635.52 209.552 635.628 209 635.844C208.472 636.036 208.004 636.324 207.596 636.708C207.212 637.068 206.9 637.488 206.66 637.968C206.444 638.448 206.336 638.976 206.336 639.552V651H204.14C203.708 651 203.3 651 202.916 651C202.556 651 202.22 651 201.908 651ZM232.738 651.36C230.746 651.36 228.982 650.94 227.446 650.1C225.934 649.26 224.746 648.12 223.882 646.68C223.042 645.216 222.622 643.548 222.622 641.676C222.622 640.188 222.862 638.832 223.342 637.608C223.822 636.384 224.482 635.328 225.322 634.44C226.186 633.528 227.206 632.832 228.382 632.352C229.582 631.848 230.89 631.596 232.306 631.596C233.554 631.596 234.718 631.836 235.798 632.316C236.878 632.796 237.814 633.456 238.606 634.296C239.398 635.112 239.998 636.096 240.406 637.248C240.838 638.376 241.042 639.612 241.018 640.956L240.982 642.504H225.61L224.782 639.48H237.274L236.698 640.092V639.3C236.626 638.556 236.386 637.908 235.978 637.356C235.57 636.78 235.042 636.336 234.394 636.024C233.77 635.688 233.074 635.52 232.306 635.52C231.13 635.52 230.134 635.748 229.318 636.204C228.526 636.66 227.926 637.32 227.518 638.184C227.11 639.024 226.906 640.08 226.906 641.352C226.906 642.576 227.158 643.644 227.662 644.556C228.19 645.468 228.922 646.176 229.858 646.68C230.818 647.16 231.934 647.4 233.206 647.4C234.094 647.4 234.91 647.256 235.654 646.968C236.398 646.68 237.202 646.164 238.066 645.42L240.262 648.48C239.614 649.08 238.87 649.596 238.03 650.028C237.214 650.436 236.35 650.76 235.438 651C234.526 651.24 233.626 651.36 232.738 651.36Z"
                fill="#F6F6F6"
              />
            </g>
            <g id="Group 12">
              <g id="Vector 257" filter="url(#filter16_d_10_1969)">
                <path
                  d="M287 227C644.362 227 611.833 228 883 228"
                  stroke="#6AE4FF"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
              <path
                id="Auroracrista_2"
                d="M28.576 237L38.404 211.8H42.796L52.552 237H47.692L42.292 222.672C42.172 222.384 42.004 221.928 41.788 221.304C41.596 220.68 41.38 220.008 41.14 219.288C40.9 218.544 40.684 217.86 40.492 217.236C40.3 216.588 40.156 216.12 40.06 215.832L40.96 215.796C40.816 216.276 40.648 216.816 40.456 217.416C40.264 218.016 40.06 218.64 39.844 219.288C39.628 219.936 39.412 220.56 39.196 221.16C39.004 221.76 38.824 222.3 38.656 222.78L33.256 237H28.576ZM33.04 231.24L34.66 227.172H46.144L47.872 231.24H33.04ZM61.9652 237.36C60.5972 237.36 59.4092 237.06 58.4012 236.46C57.3932 235.836 56.6252 234.96 56.0972 233.832C55.5692 232.68 55.3052 231.312 55.3052 229.728V218.028H59.7332V228.792C59.7332 229.8 59.8892 230.664 60.2012 231.384C60.5132 232.08 60.9692 232.62 61.5692 233.004C62.1692 233.388 62.8892 233.58 63.7292 233.58C64.3532 233.58 64.9172 233.484 65.4212 233.292C65.9492 233.076 66.4052 232.788 66.7892 232.428C67.1732 232.044 67.4732 231.6 67.6892 231.096C67.9052 230.568 68.0132 230.004 68.0132 229.404V218.028H72.4412V237H68.1212L68.0492 233.04L68.8412 232.608C68.5532 233.52 68.0612 234.336 67.3652 235.056C66.6932 235.752 65.8892 236.316 64.9532 236.748C64.0172 237.156 63.0212 237.36 61.9652 237.36ZM77.6311 237V218.028H81.9871L82.0591 224.076L81.4471 222.708C81.7111 221.748 82.1671 220.884 82.8151 220.116C83.4631 219.348 84.2071 218.748 85.0471 218.316C85.9111 217.86 86.8111 217.632 87.7471 217.632C88.1551 217.632 88.5391 217.668 88.8991 217.74C89.2831 217.812 89.5951 217.896 89.8351 217.992L88.6471 222.852C88.3831 222.708 88.0591 222.588 87.6751 222.492C87.2911 222.396 86.9071 222.348 86.5231 222.348C85.9231 222.348 85.3471 222.468 84.7951 222.708C84.2671 222.924 83.7991 223.236 83.3911 223.644C82.9831 224.052 82.6591 224.532 82.4191 225.084C82.2031 225.612 82.0951 226.212 82.0951 226.884V237H77.6311ZM100.651 237.36C98.7548 237.36 97.0628 236.94 95.5748 236.1C94.0868 235.236 92.9108 234.06 92.0468 232.572C91.1828 231.084 90.7508 229.392 90.7508 227.496C90.7508 225.6 91.1828 223.908 92.0468 222.42C92.9108 220.932 94.0868 219.768 95.5748 218.928C97.0628 218.064 98.7548 217.632 100.651 217.632C102.523 217.632 104.203 218.064 105.691 218.928C107.179 219.768 108.343 220.932 109.183 222.42C110.047 223.908 110.479 225.6 110.479 227.496C110.479 229.392 110.047 231.084 109.183 232.572C108.343 234.06 107.179 235.236 105.691 236.1C104.203 236.94 102.523 237.36 100.651 237.36ZM100.651 233.436C101.683 233.436 102.595 233.172 103.387 232.644C104.203 232.116 104.839 231.408 105.295 230.52C105.775 229.632 106.003 228.624 105.979 227.496C106.003 226.344 105.775 225.324 105.295 224.436C104.839 223.548 104.203 222.852 103.387 222.348C102.595 221.82 101.683 221.556 100.651 221.556C99.6188 221.556 98.6828 221.82 97.8428 222.348C97.0268 222.852 96.3908 223.56 95.9348 224.472C95.4788 225.36 95.2508 226.368 95.2508 227.496C95.2508 228.624 95.4788 229.632 95.9348 230.52C96.3908 231.408 97.0268 232.116 97.8428 232.644C98.6828 233.172 99.6188 233.436 100.651 233.436ZM114.44 237V218.028H118.796L118.868 224.076L118.256 222.708C118.52 221.748 118.976 220.884 119.624 220.116C120.272 219.348 121.016 218.748 121.856 218.316C122.72 217.86 123.62 217.632 124.556 217.632C124.964 217.632 125.348 217.668 125.708 217.74C126.092 217.812 126.404 217.896 126.644 217.992L125.456 222.852C125.192 222.708 124.868 222.588 124.484 222.492C124.1 222.396 123.716 222.348 123.332 222.348C122.732 222.348 122.156 222.468 121.604 222.708C121.076 222.924 120.608 223.236 120.2 223.644C119.792 224.052 119.468 224.532 119.228 225.084C119.012 225.612 118.904 226.212 118.904 226.884V237H114.44ZM135.947 237.36C134.387 237.36 132.971 236.928 131.699 236.064C130.427 235.2 129.407 234.024 128.639 232.536C127.871 231.048 127.487 229.356 127.487 227.46C127.487 225.564 127.871 223.872 128.639 222.384C129.407 220.896 130.451 219.732 131.771 218.892C133.091 218.052 134.579 217.632 136.235 217.632C137.195 217.632 138.071 217.776 138.863 218.064C139.655 218.328 140.351 218.712 140.951 219.216C141.551 219.72 142.043 220.296 142.427 220.944C142.835 221.592 143.111 222.288 143.255 223.032L142.283 222.78V218.028H146.747V237H142.247V232.464L143.291 232.284C143.123 232.932 142.811 233.568 142.355 234.192C141.923 234.792 141.371 235.332 140.699 235.812C140.051 236.268 139.319 236.64 138.503 236.928C137.711 237.216 136.859 237.36 135.947 237.36ZM137.171 233.436C138.203 233.436 139.115 233.184 139.907 232.68C140.699 232.176 141.311 231.48 141.743 230.592C142.199 229.68 142.427 228.636 142.427 227.46C142.427 226.308 142.199 225.288 141.743 224.4C141.311 223.512 140.699 222.816 139.907 222.312C139.115 221.808 138.203 221.556 137.171 221.556C136.139 221.556 135.227 221.808 134.435 222.312C133.667 222.816 133.067 223.512 132.635 224.4C132.203 225.288 131.987 226.308 131.987 227.46C131.987 228.636 132.203 229.68 132.635 230.592C133.067 231.48 133.667 232.176 134.435 232.68C135.227 233.184 136.139 233.436 137.171 233.436ZM160.017 237.36C158.241 237.36 156.645 236.928 155.229 236.064C153.813 235.2 152.697 234.024 151.881 232.536C151.065 231.048 150.657 229.368 150.657 227.496C150.657 225.624 151.065 223.944 151.881 222.456C152.697 220.968 153.813 219.792 155.229 218.928C156.645 218.064 158.241 217.632 160.017 217.632C161.721 217.632 163.269 217.956 164.661 218.604C166.053 219.252 167.133 220.152 167.901 221.304L165.453 224.256C165.093 223.752 164.637 223.296 164.085 222.888C163.533 222.48 162.945 222.156 162.321 221.916C161.697 221.676 161.073 221.556 160.449 221.556C159.393 221.556 158.445 221.82 157.605 222.348C156.789 222.852 156.141 223.56 155.661 224.472C155.181 225.36 154.941 226.368 154.941 227.496C154.941 228.624 155.181 229.632 155.661 230.52C156.165 231.408 156.837 232.116 157.677 232.644C158.517 233.172 159.453 233.436 160.485 233.436C161.109 233.436 161.709 233.34 162.285 233.148C162.885 232.932 163.449 232.632 163.977 232.248C164.505 231.864 164.997 231.384 165.453 230.808L167.901 233.796C167.085 234.852 165.957 235.716 164.517 236.388C163.101 237.036 161.601 237.36 160.017 237.36ZM171.287 237V218.028H175.643L175.715 224.076L175.103 222.708C175.367 221.748 175.823 220.884 176.471 220.116C177.119 219.348 177.863 218.748 178.703 218.316C179.567 217.86 180.467 217.632 181.403 217.632C181.811 217.632 182.195 217.668 182.555 217.74C182.939 217.812 183.251 217.896 183.491 217.992L182.303 222.852C182.039 222.708 181.715 222.588 181.331 222.492C180.947 222.396 180.563 222.348 180.179 222.348C179.579 222.348 179.003 222.468 178.451 222.708C177.923 222.924 177.455 223.236 177.047 223.644C176.639 224.052 176.315 224.532 176.075 225.084C175.859 225.612 175.751 226.212 175.751 226.884V237H171.287ZM186.944 237V218.028H191.372V237H186.944ZM189.104 213.996C188.216 213.996 187.52 213.78 187.016 213.348C186.536 212.892 186.296 212.256 186.296 211.44C186.296 210.672 186.548 210.048 187.052 209.568C187.556 209.088 188.24 208.848 189.104 208.848C190.016 208.848 190.712 209.076 191.192 209.532C191.696 209.964 191.948 210.6 191.948 211.44C191.948 212.184 191.696 212.796 191.192 213.276C190.688 213.756 189.992 213.996 189.104 213.996ZM203.323 237.36C201.643 237.36 200.131 237.084 198.787 236.532C197.467 235.956 196.387 235.14 195.547 234.084L198.427 231.6C199.147 232.416 199.951 233.004 200.839 233.364C201.727 233.724 202.663 233.904 203.647 233.904C204.055 233.904 204.415 233.856 204.727 233.76C205.063 233.664 205.351 233.52 205.591 233.328C205.831 233.136 206.011 232.92 206.131 232.68C206.275 232.416 206.347 232.128 206.347 231.816C206.347 231.24 206.131 230.784 205.699 230.448C205.459 230.28 205.075 230.1 204.547 229.908C204.043 229.716 203.383 229.524 202.567 229.332C201.271 228.996 200.191 228.612 199.327 228.18C198.463 227.724 197.791 227.22 197.311 226.668C196.903 226.212 196.591 225.696 196.375 225.12C196.183 224.544 196.087 223.92 196.087 223.248C196.087 222.408 196.267 221.652 196.627 220.98C197.011 220.284 197.527 219.684 198.175 219.18C198.823 218.676 199.579 218.292 200.443 218.028C201.307 217.764 202.207 217.632 203.143 217.632C204.103 217.632 205.027 217.752 205.915 217.992C206.827 218.232 207.667 218.58 208.435 219.036C209.227 219.468 209.899 219.996 210.451 220.62L208.003 223.32C207.547 222.888 207.043 222.504 206.491 222.168C205.963 221.832 205.423 221.568 204.871 221.376C204.319 221.16 203.803 221.052 203.323 221.052C202.867 221.052 202.459 221.1 202.099 221.196C201.739 221.268 201.439 221.388 201.199 221.556C200.959 221.724 200.767 221.94 200.623 222.204C200.503 222.444 200.443 222.732 200.443 223.068C200.467 223.356 200.539 223.632 200.659 223.896C200.803 224.136 200.995 224.34 201.235 224.508C201.499 224.676 201.895 224.868 202.423 225.084C202.951 225.3 203.635 225.504 204.475 225.696C205.651 226.008 206.635 226.356 207.427 226.74C208.219 227.124 208.843 227.568 209.299 228.072C209.755 228.504 210.079 229.008 210.271 229.584C210.463 230.16 210.559 230.796 210.559 231.492C210.559 232.62 210.235 233.628 209.587 234.516C208.963 235.404 208.099 236.1 206.995 236.604C205.915 237.108 204.691 237.36 203.323 237.36ZM216.511 237V213.204H220.939V237H216.511ZM212.767 222.132V218.028H225.079V222.132H212.767ZM235.44 237.36C233.88 237.36 232.464 236.928 231.192 236.064C229.92 235.2 228.9 234.024 228.132 232.536C227.364 231.048 226.98 229.356 226.98 227.46C226.98 225.564 227.364 223.872 228.132 222.384C228.9 220.896 229.944 219.732 231.264 218.892C232.584 218.052 234.072 217.632 235.728 217.632C236.688 217.632 237.564 217.776 238.356 218.064C239.148 218.328 239.844 218.712 240.444 219.216C241.044 219.72 241.536 220.296 241.92 220.944C242.328 221.592 242.604 222.288 242.748 223.032L241.776 222.78V218.028H246.24V237H241.74V232.464L242.784 232.284C242.616 232.932 242.304 233.568 241.848 234.192C241.416 234.792 240.864 235.332 240.192 235.812C239.544 236.268 238.812 236.64 237.996 236.928C237.204 237.216 236.352 237.36 235.44 237.36ZM236.664 233.436C237.696 233.436 238.608 233.184 239.4 232.68C240.192 232.176 240.804 231.48 241.236 230.592C241.692 229.68 241.92 228.636 241.92 227.46C241.92 226.308 241.692 225.288 241.236 224.4C240.804 223.512 240.192 222.816 239.4 222.312C238.608 221.808 237.696 221.556 236.664 221.556C235.632 221.556 234.72 221.808 233.928 222.312C233.16 222.816 232.56 223.512 232.128 224.4C231.696 225.288 231.48 226.308 231.48 227.46C231.48 228.636 231.696 229.68 232.128 230.592C232.56 231.48 233.16 232.176 233.928 232.68C234.72 233.184 235.632 233.436 236.664 233.436Z"
                fill="#F6F6F6"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_10_1969"
            x="1767"
            y="212.862"
            width="211.828"
            height="1058.95"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="16"
              result="effect1_foregroundBlur_10_1969"
            />
          </filter>
          <filter
            id="filter1_f_10_1969"
            x="1071.43"
            y="459"
            width="919.862"
            height="672"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="64"
              result="effect1_foregroundBlur_10_1969"
            />
          </filter>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="0.790935"
            height="0.273867"
          >
            <use
              xlinkHref="#image0_10_1969"
              transform="scale(0.00129238 0.000447496)"
            />
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="0.198199"
            height="0.311653"
          >
            <use
              xlinkHref="#image0_10_1969"
              transform="scale(0.000323855 0.000509237)"
            />
          </pattern>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="0.573108"
            height="0.408545"
          >
            <use
              xlinkHref="#image0_10_1969"
              transform="scale(0.000936451 0.000667557)"
            />
          </pattern>
          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1.30273"
            height="0.73729"
          >
            <use
              xlinkHref="#image0_10_1969"
              transform="scale(0.00212865 0.00120472)"
            />
          </pattern>
          <filter
            id="filter2_d_10_1969"
            x="216"
            y="1780"
            width="502"
            height="170"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_10_1969"
            x="814"
            y="1935"
            width="345"
            height="692"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_10_1969"
            x="924"
            y="2060"
            width="651"
            height="919"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_10_1969"
            x="955"
            y="3081"
            width="640"
            height="68"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_d_10_1969"
            x="716"
            y="1860"
            width="975"
            height="941"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_d_10_1969"
            x="220"
            y="1533"
            width="422"
            height="85"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_d_10_1969"
            x="1647"
            y="47"
            width="197.001"
            height="241"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter9_d_10_1969"
            x="1908"
            y="199"
            width="234"
            height="163"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter10_d_10_1969"
            x="1895"
            y="329"
            width="509"
            height="390"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter11_d_10_1969"
            x="156"
            y="1733"
            width="274"
            height="20"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter12_d_10_1969"
            x="350"
            y="1358"
            width="574"
            height="141"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter13_d_10_1969"
            x="325"
            y="1166"
            width="1096"
            height="345"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter14_d_10_1969"
            x="507"
            y="749"
            width="965"
            height="202"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter15_d_10_1969"
            x="277"
            y="638"
            width="320"
            height="21"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <filter
            id="filter16_d_10_1969"
            x="277"
            y="221"
            width="616"
            height="21"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10_1969"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10_1969"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_10_1969"
            x1="2381.5"
            y1="571"
            x2="2467"
            y2="658"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFA6D1" />
            <stop offset="1" stop-color="#BF6892" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_10_1969"
            x1="2286"
            y1="839"
            x2="2205.5"
            y2="834"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFA6D1" />
            <stop offset="1" stop-color="#B478D0" />
          </linearGradient>
          <radialGradient
            id="paint2_radial_10_1969"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(714.813 578.5) rotate(87.0902) scale(84.5 78.4476)"
          >
            <stop stop-color="#FF932F" />
            <stop offset="1" stop-color="#FF3131" />
          </radialGradient>
          <linearGradient
            id="paint3_linear_10_1969"
            x1="921.436"
            y1="275.643"
            x2="961.426"
            y2="276.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_10_1969"
            x1="881.446"
            y1="274.756"
            x2="921.436"
            y2="275.643"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_10_1969"
            x1="801.466"
            y1="272.981"
            x2="841.456"
            y2="273.868"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_10_1969"
            x1="1001.42"
            y1="277.418"
            x2="1041.41"
            y2="278.305"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_10_1969"
            x1="961.426"
            y1="276.53"
            x2="1001.42"
            y2="277.417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_10_1969"
            x1="920.991"
            y1="295.691"
            x2="960.982"
            y2="296.578"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_10_1969"
            x1="841.456"
            y1="273.868"
            x2="881.446"
            y2="274.756"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_10_1969"
            x1="841.011"
            y1="293.916"
            x2="881.001"
            y2="294.803"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_10_1969"
            x1="881.001"
            y1="294.803"
            x2="920.991"
            y2="295.691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_10_1969"
            x1="1000.97"
            y1="297.465"
            x2="1040.96"
            y2="298.352"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_10_1969"
            x1="960.982"
            y1="296.578"
            x2="1000.97"
            y2="297.465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_10_1969"
            x1="1081.4"
            y1="279.192"
            x2="1121.39"
            y2="280.079"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_10_1969"
            x1="1041.41"
            y1="278.305"
            x2="1081.4"
            y2="279.192"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_10_1969"
            x1="1161.38"
            y1="280.967"
            x2="1201.37"
            y2="281.854"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_10_1969"
            x1="1121.39"
            y1="280.079"
            x2="1161.38"
            y2="280.967"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_10_1969"
            x1="1080.95"
            y1="299.24"
            x2="1120.94"
            y2="300.127"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_10_1969"
            x1="1040.96"
            y1="298.353"
            x2="1080.95"
            y2="299.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_10_1969"
            x1="1160.93"
            y1="301.014"
            x2="1200.92"
            y2="301.902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_10_1969"
            x1="1120.94"
            y1="300.127"
            x2="1160.93"
            y2="301.014"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint22_linear_10_1969"
            x1="1241.36"
            y1="282.741"
            x2="1281.35"
            y2="283.629"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint23_linear_10_1969"
            x1="1201.37"
            y1="281.854"
            x2="1241.36"
            y2="282.741"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_10_1969"
            x1="1321.34"
            y1="284.516"
            x2="1361.33"
            y2="285.403"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint25_linear_10_1969"
            x1="1281.35"
            y1="283.629"
            x2="1321.34"
            y2="284.516"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint26_linear_10_1969"
            x1="1240.91"
            y1="302.789"
            x2="1280.9"
            y2="303.676"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint27_linear_10_1969"
            x1="1200.92"
            y1="301.902"
            x2="1240.91"
            y2="302.789"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint28_linear_10_1969"
            x1="1320.89"
            y1="304.564"
            x2="1360.88"
            y2="305.451"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint29_linear_10_1969"
            x1="1280.9"
            y1="303.676"
            x2="1320.89"
            y2="304.564"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint30_linear_10_1969"
            x1="1401.32"
            y1="286.29"
            x2="1441.31"
            y2="287.178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint31_linear_10_1969"
            x1="1361.33"
            y1="285.403"
            x2="1401.32"
            y2="286.291"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint32_linear_10_1969"
            x1="1481.3"
            y1="288.065"
            x2="1521.29"
            y2="288.952"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint33_linear_10_1969"
            x1="1441.31"
            y1="287.178"
            x2="1481.3"
            y2="288.065"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint34_linear_10_1969"
            x1="1400.87"
            y1="306.338"
            x2="1440.86"
            y2="307.225"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint35_linear_10_1969"
            x1="1360.88"
            y1="305.451"
            x2="1400.87"
            y2="306.338"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint36_linear_10_1969"
            x1="1480.85"
            y1="308.113"
            x2="1520.84"
            y2="309"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint37_linear_10_1969"
            x1="1440.86"
            y1="307.225"
            x2="1480.85"
            y2="308.113"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint38_linear_10_1969"
            x1="1561.28"
            y1="289.839"
            x2="1601.27"
            y2="290.727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint39_linear_10_1969"
            x1="1521.29"
            y1="288.952"
            x2="1561.28"
            y2="289.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint40_linear_10_1969"
            x1="1641.26"
            y1="291.614"
            x2="1681.25"
            y2="292.501"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint41_linear_10_1969"
            x1="1721.24"
            y1="293.389"
            x2="1738.26"
            y2="293.767"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7373" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint42_linear_10_1969"
            x1="1601.27"
            y1="290.727"
            x2="1641.26"
            y2="291.614"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <linearGradient
            id="paint43_linear_10_1969"
            x1="1560.83"
            y1="309.887"
            x2="1600.82"
            y2="310.775"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint44_linear_10_1969"
            x1="1520.84"
            y1="309"
            x2="1560.83"
            y2="309.887"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint45_linear_10_1969"
            x1="1640.81"
            y1="311.662"
            x2="1680.8"
            y2="312.549"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint46_linear_10_1969"
            x1="1600.82"
            y1="310.775"
            x2="1640.81"
            y2="311.662"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D95B5B" />
            <stop offset="1" stop-color="#9A3C3C" />
          </linearGradient>
          <linearGradient
            id="paint47_linear_10_1969"
            x1="1681.25"
            y1="292.501"
            x2="1721.24"
            y2="293.389"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9A3C3C" />
            <stop offset="1" stop-color="#D95B5B" />
          </linearGradient>
          <image
            id="image0_10_1969"
            data-name="bonesponge(edit).jpg"
            width="612"
            height="612"
          />
        </defs>
      </svg>
    </Box>
  );
}