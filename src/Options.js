// @flow

import BlotSpec from './specs/BlotSpec';
import ImageSpec from './specs/ImageSpec';
import IframeVideoSpec from './specs/IframeVideoSpec';

export type OverlayOptions = {
  // classname applied to the overlay element
  className: string,
  // style applied to overlay element, or null to prevent styles
  style: ?{},
};

export type ResizeOptions = {
  // class name applied to the resize handles
  handleClassName: string,
  // style applied to resize handles, or null to prevent styles
  handleStyle: ?{},
};

export type AlignOptions = {
  // the name of the attribute for an element that has its alignment changed
  attribute: string,
  // the aligner does the actual alignment switch
  aligner: {
    // whether or not the aligner should handle the actual alignment properties
    applyStyle: boolean,
  },
  // icons used for alignment
  icons: {
    left: string,
    center: string,
    right: string,
  },
  // the toolbar so users can change alignments
  toolbar: {
    // whether or not users can deselect an alignment. it's up to you to set the initial alignment
    allowDeselect: boolean,
    // class name applied to the root toolbar element
    mainClassName: string,
    // style applied to root toolbar element, or null to prevent styles
    mainStyle: ?{},
    // class name applied to each button in the toolbar
    buttonClassName: string,
    /* whether or not to add the selected style to the buttons.
    they'll always get the is-selected class */
    addButtonSelectStyle: boolean,
    // style applied to buttons, or null to prevent styles
    buttonStyle: ?{},
    // style applied to the svgs in the buttons
    svgStyle: ?{},
  },
};

export type Options = {
  // the BlotSpecs supported
  specs: Class<BlotSpec>[],
  overlay: OverlayOptions,
  align: AlignOptions,
  resize: ResizeOptions,
};

const DefaultOptions: Options = {
  specs: [
    ImageSpec,
    IframeVideoSpec,
  ],
  overlay: {
    className: 'blot-formatter__overlay',
    style: {
      position: 'absolute',
      boxSizing: 'border-box',
      border: '1px dashed #444',
    },
  },
  align: {
    attribute: 'data-align',
    aligner: {
      applyStyle: true,
    },
    icons: {
      left: `
        <svg version="1.1"  width="469" height="469" viewbox="0 0 469 469">
            <path id="shapePath1" d="M410.81,314.176 L58.8515,314.176 C51.7436,314.176 45.9749,303.424 45.9749,290.176 C45.9749,276.928 51.7436,266.176 58.8515,266.176 L410.81,266.176 C417.917,266.176 423.686,276.928 423.686,290.176 C423.686,303.424 417.917,314.176 410.81,314.176 M410.81,314.176 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath2" d="M221.687,205 L75.7539,205 C59.1835,205 45.7065,191.322 45.7065,174.507 L45.7065,78.6715 C45.7065,61.8539 59.1835,48.1758 75.7539,48.1758 L221.687,48.1758 C238.254,48.1758 251.731,61.8539 251.731,78.6715 L251.731,174.507 C251.731,191.322 238.254,205 221.687,205 M75.7539,74.3131 C73.3836,74.3131 71.4596,76.2658 71.4596,78.6715 L71.4596,174.507 C71.4596,176.913 73.3836,178.863 75.7539,178.863 L221.687,178.863 C224.057,178.863 225.978,176.913 225.978,174.507 L225.978,78.6715 C225.978,76.2658 224.057,74.3131 221.687,74.3131 L75.7539,74.3131 M75.7539,74.3131 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath3" d="M58.5654,157.084 C55.3745,157.084 52.1617,155.897 49.6719,153.475 C44.5382,148.491 44.3339,140.215 49.26,134.989 L106.623,74.0005 C111.515,68.8094 119.6,68.5637 124.768,73.5123 L141.354,89.3504 L172.188,56.5766 C176.979,51.4525 184.929,51.1398 190.097,55.8779 L247.457,108.153 C252.745,112.964 253.191,121.24 248.435,126.607 C243.697,131.974 235.543,132.408 230.255,127.599 L182.182,83.7924 L151.141,116.796 C146.246,121.99 138.16,122.233 132.992,117.284 L116.409,101.446 L67.8707,153.041 C65.3494,155.724 61.9668,157.084 58.5654,157.084 M58.5654,157.084 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath4" d="M410.525,423.176 L58.5665,423.176 C51.4586,423.176 45.69,412.424 45.69,399.176 C45.69,385.928 51.4586,375.176 58.5665,375.176 L410.525,375.176 C417.632,375.176 423.401,385.928 423.401,399.176 C423.401,412.424 417.632,423.176 410.525,423.176 M410.525,423.176 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath5" d="M410.24,96.1758 L298.642,96.1758 C291.534,96.1758 285.765,85.4238 285.765,72.1758 C285.765,58.9277 291.534,48.1758 298.642,48.1758 L410.24,48.1758 C417.348,48.1758 423.116,58.9277 423.116,72.1758 C423.116,85.4238 417.348,96.1758 410.24,96.1758 M410.24,96.1758 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath6" d="M410.525,205.176 L298.927,205.176 C291.819,205.176 286.05,194.424 286.05,181.176 C286.05,167.928 291.819,157.176 298.927,157.176 L410.525,157.176 C417.632,157.176 423.401,167.928 423.401,181.176 C423.401,194.424 417.632,205.176 410.525,205.176 M410.525,205.176 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
        </svg>
      `,
      center: `
        <svg version="1.1"  width="469" height="469" viewbox="0 0 469 469">
            <path id="shapePath1" d="M410.479,96 L58.521,96 C51.4131,96 45.6444,85.248 45.6444,72 C45.6444,58.7519 51.4131,48 58.521,48 L410.479,48 C417.587,48 423.356,58.7519 423.356,72 C423.356,85.248 417.587,96 410.479,96 M410.479,96 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath2" d="M307.476,312.912 L161.543,312.912 C144.973,312.912 131.496,299.234 131.496,282.42 L131.496,186.584 C131.496,169.766 144.973,156.088 161.543,156.088 L307.476,156.088 C324.044,156.088 337.521,169.766 337.521,186.584 L337.521,282.42 C337.521,299.234 324.044,312.912 307.476,312.912 M161.543,182.225 C159.173,182.225 157.249,184.178 157.249,186.584 L157.249,282.42 C157.249,284.825 159.173,286.775 161.543,286.775 L307.476,286.775 C309.847,286.775 311.768,284.825 311.768,282.42 L311.768,186.584 C311.768,184.178 309.847,182.225 307.476,182.225 L161.543,182.225 M161.543,182.225 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath3" d="M144.355,264.996 C141.164,264.996 137.951,263.809 135.461,261.387 C130.328,256.403 130.123,248.127 135.049,242.901 L192.412,181.913 C197.304,176.721 205.389,176.476 210.558,181.424 L227.144,197.263 L257.977,164.489 C262.768,159.365 270.718,159.052 275.887,163.79 L333.246,216.065 C338.534,220.876 338.98,229.153 334.224,234.519 C329.487,239.886 321.332,240.32 316.044,235.511 L267.971,191.705 L236.93,224.708 C232.035,229.902 223.95,230.145 218.782,225.196 L202.199,209.358 L153.66,260.953 C151.139,263.637 147.756,264.996 144.355,264.996 M144.355,264.996 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath4" d="M410.525,423.176 L58.5665,423.176 C51.4586,423.176 45.69,412.424 45.69,399.176 C45.69,385.928 51.4586,375.176 58.5665,375.176 L410.525,375.176 C417.632,375.176 423.401,385.928 423.401,399.176 C423.401,412.424 417.632,423.176 410.525,423.176 M410.525,423.176 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
        </svg>
      `,
      right: `
        <svg version="1.1"  width="469" height="469" viewbox="0 0 469 469">
        <path id="shapePath1" d="M410.81,314.176 L58.8515,314.176 C51.7436,314.176 45.9749,303.424 45.9749,290.176 C45.9749,276.928 51.7436,266.176 58.8515,266.176 L410.81,266.176 C417.917,266.176 423.686,276.928 423.686,290.176 C423.686,303.424 417.917,314.176 410.81,314.176 M410.81,314.176 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath2" d="M393.642,205 L247.709,205 C231.138,205 217.661,191.322 217.661,174.507 L217.661,78.6715 C217.661,61.8539 231.138,48.1758 247.709,48.1758 L393.642,48.1758 C410.209,48.1758 423.686,61.8539 423.686,78.6715 L423.686,174.507 C423.686,191.322 410.209,205 393.642,205 M247.709,74.3131 C245.338,74.3131 243.414,76.2658 243.414,78.6715 L243.414,174.507 C243.414,176.913 245.338,178.863 247.709,178.863 L393.642,178.863 C396.012,178.863 397.933,176.913 397.933,174.507 L397.933,78.6715 C397.933,76.2658 396.012,74.3131 393.642,74.3131 L247.709,74.3131 M247.709,74.3131 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath3" d="M230.52,157.084 C227.329,157.084 224.116,155.897 221.627,153.475 C216.493,148.491 216.289,140.215 221.215,134.989 L278.578,74.0005 C283.469,68.8094 291.555,68.5637 296.723,73.5123 L313.309,89.3504 L344.142,56.5766 C348.933,51.4525 356.884,51.1398 362.052,55.8779 L419.412,108.153 C424.699,112.964 425.146,121.24 420.389,126.607 C415.652,131.974 407.497,132.408 402.21,127.599 L354.136,83.7924 L323.095,116.796 C318.201,121.99 310.115,122.233 304.947,117.284 L288.364,101.446 L239.825,153.041 C237.304,155.724 233.922,157.084 230.52,157.084 M230.52,157.084 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath4" d="M410.525,423.176 L58.5665,423.176 C51.4586,423.176 45.69,412.424 45.69,399.176 C45.69,385.928 51.4586,375.176 58.5665,375.176 L410.525,375.176 C417.632,375.176 423.401,385.928 423.401,399.176 C423.401,412.424 417.632,423.176 410.525,423.176 M410.525,423.176 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath5" d="M170.164,96 L58.5665,96 C51.4587,96 45.69,85.248 45.69,72 C45.69,58.7519 51.4587,48 58.5665,48 L170.164,48 C177.272,48 183.041,58.7519 183.041,72 C183.041,85.248 177.272,96 170.164,96 M170.164,96 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
            <path id="shapePath6" d="M170.449,205 L58.8515,205 C51.7436,205 45.9749,194.248 45.9749,181 C45.9749,167.752 51.7436,157 58.8515,157 L170.449,157 C177.557,157 183.326,167.752 183.326,181 C183.326,194.248 177.557,205 170.449,205 M170.449,205 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
        </svg>
      `,
      inline: `
        <svg  width="469" height="469" viewbox="0 0 469 469">
          <path id="shapePath1" d="M307.476,312.912 L161.543,312.912 C144.973,312.912 131.496,299.234 131.496,282.42 L131.496,186.584 C131.496,169.766 144.973,156.088 161.543,156.088 L307.476,156.088 C324.044,156.088 337.521,169.766 337.521,186.584 L337.521,282.42 C337.521,299.234 324.044,312.912 307.476,312.912 M161.543,182.225 C159.173,182.225 157.249,184.178 157.249,186.584 L157.249,282.42 C157.249,284.825 159.173,286.775 161.543,286.775 L307.476,286.775 C309.847,286.775 311.768,284.825 311.768,282.42 L311.768,186.584 C311.768,184.178 309.847,182.225 307.476,182.225 L161.543,182.225 M161.543,182.225 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
          <path id="shapePath2" d="M144.355,264.996 C141.164,264.996 137.951,263.809 135.461,261.387 C130.328,256.403 130.123,248.127 135.049,242.901 L192.412,181.913 C197.304,176.721 205.389,176.476 210.558,181.424 L227.144,197.263 L257.977,164.489 C262.768,159.365 270.718,159.052 275.887,163.79 L333.246,216.065 C338.534,220.876 338.98,229.153 334.224,234.519 C329.487,239.886 321.332,240.32 316.044,235.511 L267.971,191.705 L236.93,224.708 C232.035,229.902 223.95,230.145 218.782,225.196 L202.199,209.358 L153.66,260.953 C151.139,263.637 147.756,264.996 144.355,264.996 M144.355,264.996 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
          <path id="shapePath3" d="M102.158,258.5 L51.498,258.5 C48.2714,258.5 45.6527,247.748 45.6527,234.5 C45.6527,221.252 48.2714,210.5 51.498,210.5 L102.158,210.5 C105.385,210.5 108.004,221.252 108.004,234.5 C108.004,247.748 105.385,258.5 102.158,258.5 M102.158,258.5 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
          <path id="shapePath4" d="M417.518,258.5 L366.858,258.5 C363.632,258.5 361.013,247.748 361.013,234.5 C361.013,221.252 363.632,210.5 366.858,210.5 L417.518,210.5 C420.745,210.5 423.364,221.252 423.364,234.5 C423.364,247.748 420.745,258.5 417.518,258.5 M417.518,258.5 " style="stroke:none;fill-rule:nonzero;fill:#000000;fill-opacity:1;"/>
        </svg>
      `,
      remove: `
        <svg width="300" height="300" id="svgcontent" overflow="visible" viewBox="0 -15 50 80"><path d="M24,0C10.7,0 0,10.7 0,24S10.7,48 24,48S48,37.3 48,24S37.3,0 24,0zM24,41C14.6,41 7,33.4 7,24C7,20.6 8,17.4 9.8,14.7L33.3,38.2C30.6,40 27.4,41 24,41zM38.2,33.3L14.7,9.8C17.4,8 20.6,7 24,7C33.4,7 41,14.6 41,24C41,27.4 40,30.6 38.2,33.3z" style="pointer-events:inherit" id="svg_2"></path></svg>
      `,
      // remove: `
      //   <svg width="300" height="300" id="svgcontent" overflow="visible" x="174.5" y="58" viewBox="0 -15 50 80"><path d="M30.1,24L47.4,6.7C48.2,5.9 48.2,4.6 47.4,3.8L44.2,0.6C43.4,-0.2 42.1,-0.2 41.3,0.6L24,17.9L6.7,0.6C5.9,-0.2 4.6,-0.2 3.8,0.6L0.6,3.8C-0.2,4.6 -0.2,5.9 0.6,6.7L17.9,24L0.6,41.3C-0.2,42.1 -0.2,43.4 0.6,44.2L3.8,47.4C4.6,48.2 5.9,48.2 6.7,47.4L24,30.1L41.3,47.4C42.1,48.2 43.4,48.2 44.2,47.4L47.4,44.2C48.2,43.4 48.2,42.1 47.4,41.3L30.1,24z" style="pointer-events:inherit" id="svg_2"></path></svg>
      // `,
    },

    toolbar: {
      allowDeselect: true,
      mainClassName: 'blot-formatter__toolbar',
      mainStyle: {
        position: 'absolute',
        top: '-12px',
        right: '0',
        left: '0',
        // height: '0',
        minWidth: '100px',
        font: '12px/1.0 Arial, Helvetica, sans-serif',
        textAlign: 'center',
        color: '#333',
        boxSizing: 'border-box',
        cursor: 'default',
        zIndex: '1',
        padding: '5px 12px',
        border: '1px solid #ccc',
        boxShadow: '0 0 5px #ddd',
        background: 'white',
      },
      buttonClassName: 'blot-formatter__toolbar-button',
      addButtonSelectStyle: true,
      buttonStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        // border: '1px solid #999',
        verticalAlign: 'middle',
      },
      svgStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        // border: '1px solid #999',
        verticalAlign: 'middle',
      },
    },
  },
  resize: {
    handleClassName: 'blot-formatter__resize-handle',
    handleStyle: {
      position: 'absolute',
      height: '12px',
      width: '12px',
      backgroundColor: 'white',
      border: '1px solid #777',
      boxSizing: 'border-box',
      opacity: '0.80',
    },
  },
};

export default DefaultOptions;
