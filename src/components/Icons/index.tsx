import { IconType, GetColorsFnType } from './types';

const getColor: GetColorsFnType = function (color) {
  return '#fff';
};

export const InstagramIcon: IconType = function (props) {
  const { color } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
      <path
        fill={getColor(color)} 
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  );
};

export const GMailIcon: IconType = function (props) {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
      <g>
        <path 
          transform="rotate(0,16,16) translate(0,6.1274995803833) scale(1,1)  " 
          fill={getColor(color)} 
          d="M13.536011,10.258006L4.9530029,15.900001 4.9530029,19.538 27.415039,19.538 27.415039,15.69799 18.407043,10.430995 16.08905,12.047998 16.079041,12.042993z M4.9730225,4.2369974L4.9530029,15.254997 13.041016,9.9119976z M27.415039,4.1139963L18.877014,10.085002 27.415039,15.017998z M6.3060303,0.17300416L13.598022,6.1740082 15.972046,8.1229971 16.447021,7.7519949 25.975037,0.20700074z M0,0L6.092041,0 26.230042,0 32,0 32,19.745001 0,19.745001z" 
        />
      </g>
    </svg>
  );
};

export const LinkedIcon: IconType = function (props) {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
      <g>
        <path 
          fill={getColor(color)} 
          transform="rotate(0,16,16) translate(1.6,2.23630065917969) scale(0.9,0.9)  " 
          d="M0.40802002,9.946991L7.2670288,9.946991 7.2670288,30.585999 0.40802002,30.585999z M24.106018,9.4620056C28.615051,9.4620056,32,12.412994,32,18.748993L32,30.584991 25.143005,30.584991 25.143005,19.54599C25.143005,16.768005 24.147034,14.878998 21.665039,14.878998 19.770996,14.878998 18.643005,16.156006 18.147034,17.385986 17.96405,17.825012 17.923035,18.442993 17.923035,19.061005L17.923035,30.584991 11.059998,30.584991C11.059998,30.584991,11.152039,11.881989,11.059998,9.946991L17.923035,9.946991 17.923035,12.872986C17.907043,12.893005,17.892029,12.919006,17.877014,12.938995L17.923035,12.938995 17.923035,12.872986C18.832031,11.463989,20.460022,9.4620056,24.106018,9.4620056z M3.8810425,0C6.2300415,0 7.6750488,1.5429993 7.7160034,3.5650024 7.7160034,5.5469971 6.2300415,7.131012 3.8400269,7.131012L3.7940063,7.131012C1.4910278,7.131012 0,5.5469971 0,3.5650024 0,1.5429993 1.5370483,0 3.8810425,0z" 
        />
      </g>
    </svg>
  );
};

export const GithubIcon: IconType = function (props) {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
      <path 
        fill={getColor(color)} 
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  );
};

export const GraduationIcon: IconType = function (props) {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
      <g>
        <path
          fill={getColor(color)} 
          transform="rotate(0,16,16) translate(0,2.64950752258301) scale(1,1)  " 
          d="M5.5999908,15.55491L16,21.820868 26.399994,15.887917 26.399994,22.488863C26.399994,22.488863 21.065994,26.901834 16.087997,26.693859 16.087997,26.693859 11,26.701855 5.5999908,22.190861z M16.709991,0L32,8.1779347 32,14.22191C32,14.474898 31.760986,14.681898 31.466003,14.681898 31.17099,14.681898 30.931992,14.474898 30.931992,14.22191L31.242004,8.6149445 16,17.421906 0,8.1779347z" 
        />
      </g>
    </svg>
  );
};

export const LocationIcon: IconType = function (props) {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
      <g>
        <path
          fill={getColor(color)} 
          transform="rotate(0,16,16) translate(5.89999961853027,0) scale(1,1)  " 
          d="M10.1,5C7.200008,5 4.8999911,7.1999969 4.8999911,10 4.8999911,12.800003 7.200008,15 10.1,15 12.999992,15 15.300009,12.800003 15.300009,10 15.300009,7.3000031 12.899986,5 10.1,5z M10.1,0C15.700003,0 20.2,4.3000031 20.2,9.6999969 20.2,11.600006 19.599994,13.300003 18.700002,14.800003L14.499991,23.300003 10.1,32 5.800015,23.300003 1.6000052,14.800003C0.60000567,13.300003 -4.7890353E-08,11.600006 0,9.6999969 -4.7890353E-08,4.3000031 4.4999972,0 10.1,0z" 
        />
      </g>
    </svg>
  );
};

export const CollegeIcon: IconType = function (props) {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
      <g>
        <path 
          fill={getColor(color)} 
          transform="rotate(0,16,16) translate(0,2.8149995803833) scale(1,1)  " 
          d="M0,25.549994L32,25.549994 32,26.370001 0,26.370001z M0.72998047,23.385016L31.179993,23.385016 31.179993,24.205023 0.72998047,24.205023z M22.588013,9.9829732C21.567993,9.9829732,20.741028,10.809024,20.741028,11.828982L20.741028,21.33399 24.434021,21.33399 24.434021,11.828982C24.434021,10.809024,23.606995,9.9829732,22.588013,9.9829732z M15.955017,9.9829732C14.935974,9.9829732,14.109009,10.809024,14.109009,11.828982L14.109009,21.33399 17.801025,21.33399 17.801025,11.828982C17.801025,10.809024,16.974976,9.9829732,15.955017,9.9829732z M9.322998,9.9829732C8.3029785,9.9829732,7.4769897,10.809024,7.4769897,11.828982L7.4769897,21.33399 11.169006,21.33399 11.169006,11.828982C11.169006,10.809024,10.34198,9.9829732,9.322998,9.9829732z M2.9639893,9.026003L28.992004,9.026003 28.992004,9.9979878 28.939026,10.003969C28.052979,10.140017,27.374023,10.904971,27.374023,11.828982L27.374023,21.33399 28.992004,21.33399 29.242004,21.33399 29.242004,22.153998 2.6669922,22.153998 2.6669922,21.33399 2.9190063,21.33399 4.5369873,21.33399 4.5369873,11.828982C4.5369873,10.904971,3.8579712,10.140017,2.9719849,10.003969L2.960022,10.002993z M16.125977,0L29.869019,4.7860118 29.869019,7.6580215 2.0410156,7.6580215 2.0410156,4.8549815z" 
        />
      </g>
    </svg>
  );
};
