import React from 'react';
import IconProps from './types/icon-types';
export const FacebookIcon: React.FC<IconProps> = ({
  size,
  color,
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      enableBackground="new 0 0 500 500"
      id="Layer_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...attributes}
    >
      <g>
        <path
          d="M417.599,105.437c-1.285-25.304-10.457-32.807-35.336-34.783c-35.925-4.098-72.158-5.487-107.917,0.83   c-41.871,9.034-148.19,12.859-175.638,38.046C67.439,135.852,86.553,308.888,85.458,358.1   c0.954,27.494,25.712,42.028,45.025,57.503c30.26,25.944,49.641,17.96,83.969,6.111c60.205-23.735,123.338-42,180.031-73.588   c23.057-13.155,20.922-43.389,22.721-66.474C417.055,222.939,421.784,164.053,417.599,105.437z"
          fill="#3C3A5D"
        />
        <path
          d="M154.853,428.568c0,0-55.775-38.112-62.648-55c-6.873-16.888-9-211.409-5.667-227.538   s7.667-39.129,30.333-45.129c55.138-13.074,224.647-40.668,276.156-24c-30.358,3.105-177.991,21.291-215.489,30.762   c-42.985,11.449-27.966,66.969-29.168,96.073c4.68,42.785-8.696,196.7,11.834,221.999L154.853,428.568z"
          fill="#426DA2"
        />
        <path
          d="M162.454,429.735c37.321-3.057,205.828-68.62,229.499-83.251c11.501-8.249,14.349-13.749,17.425-21.749   c5.519-43.694,7.225-192.148,1.693-235.5c-2.117-6.75-12.008-11.852-24.437-11.676c-12.43,0.176-144.662,18.831-167.34,22.313   c-39.423,5.59-73.114,11.923-71.921,51.178c0.606,74.522,2.068,189.516,4.665,260.685   C152.454,415.151,162.454,429.735,162.454,429.735z"
          fill="#518BD3"
        />
        <path
          d="M148.697,268.283c0,0,51.008,129.701,87.085,126.182c25.946-2.531,147.197-49.956,157.245-60.167   s17.992-28.065,17.992-28.065c12.684,62.543-218.811,115.915-249.352,122.341C142,413.195,152.63,280.716,148.697,268.283z"
          fill="#386EC2"
        />
        <path
          d="M151.164,130.366c27.102-23.817,219.379-40.644,240.205-43.968c25.059,0.662,18.795,57.289,16.004,75.408   c-3.002,13.429-5.831,23.86-3.26,35.773c3.95,38.989,6.126,110.576-7.409,145.155c0,0,13.633-14.164,14.366-30   s3.628-103.738,3.628-103.738s0-100.596,0-100.596s0.18-20.279-8.574-25.556c-30.36-12.919-183.889,20.696-209.587,21.886   C186.413,107.369,157.298,110.447,151.164,130.366z"
          fill="#70A2DD"
        />
        <path
          d="M280.047,137.235c-27.803,8.228-39.369,45.86-37.73,69.25l-17.158,2.172l-9.57,9.653   c2.113,41.455-7.176,40.158,26.728,34.209c0,0,5.627,97.536,7.335,98.987c1.708,1.451,15.303,4.836,15.303,4.836L280.047,137.235z"
          fill="#386EC2"
        />
        <path
          d="M309.538,184.735l18.367,1.633l-25.018,6.367l-32.683,165.5l-11.667-4.833l-4.333-103.713l-11.823,3.956   l-17.223-3.956l-1.574-39.444l29.12-11.843c-1.681-31.232,7.174-64.809,47.813-65.167l-8.313,60.167l8.875-6.104L309.538,184.735z"
          fill="#8DB2E1"
        />
        <path
          d="M266.371,245.235l3.833,113l36.667-15.5l-3.984-107.667l22.817-10l4.333-39.243l-27.151,6.91   c-7.75-20.985,16.034-26.934,29.984-31.333l-1.335-33.5c-46.011,1.87-76.543,23.858-66.165,74l-26.362,11.333l3.308,39.284   L266.371,245.235z"
          fill="#D6E7FB"
        />
        <path
          d="M334.181,159.645c0.224-9.688-0.261-19.387-0.867-29.036c-0.542-3.803-0.772-3.998-4.756-4.072   c-21.805,1.636-46.141,3.298-63.458,18.147c-13.173,13.294-14.196,33.547-13.657,51.214c-0.536,3.79-6.9,2.533-9.111,5.247   c-28.67,9.472-18.445,6.407-18.946,36.819c1.043,4.303-2.071,12.063,3.225,13.787c7.872,1.768,15.947,4.115,23.552,0.538   c1.42-0.449,1.729-0.278,1.735,1.237c1.71,32.623,3.022,65.301,4.983,97.916c0.312,5.065,5.998,5.088,9.279,7.52   c8.067,3.729,16.371-4.938,24.205-6.901c4.878-3.115,16.379-4.658,17.644-10.637c-1.069-34.754-2.755-69.491-3.747-104.223   c0.008-1.103,0.272-1.649,1.379-2.082c4.817-2.909,21.966-5.888,21.946-11.556c-0.109-3.492,0.534-7.01,0.912-10.51   c0.981-8.65,2.071-17.295,2.65-25.984c0.157-2.338-0.137-2.495-2.523-2.641c-7.936-0.263-16.008-1.973-23.831,0.254   c-2.325,1.038-2.085-0.433-1.697-2.261C305.452,165.835,337.69,166.111,334.181,159.645z M255.205,181.065   c0.541-24.211,13.272-42.602,37.937-46.638c-27.18,10.675-35.001,34.257-30.425,61.539c1.964,7.148-2.388,3.33-6.553,2.994   C252.61,197.909,255.669,184.723,255.205,181.065z M236.053,206.231c8.147-2.092,15.574-7.751,23.987-3.689   c-11.017,3.176-20.383,10.189-32.003,6.289C230.709,207.966,233.388,207.12,236.053,206.231z M237.934,250.852   c-2.726-1.279-10.529-0.362-11.107-3.405c-0.458-12.427-0.967-24.59-1.668-37.058c18.274,2.693,10.173,0.186,12.293,16.578   C236.598,230.108,242.102,253.578,237.934,250.852z M268.119,356.001c-2.323-1.576-7.327-1.908-8.231-4.404   c-0.391-24.475-2.21-48.91-3.264-73.368c-0.463-9.006-0.676-18.027-1.205-27.03c-0.07-0.959,0.283-1.406,1.167-1.706   c1.804-0.014,8.428-4.475,8.267-1.599C265.779,283.934,266.491,320.037,268.119,356.001z M303.687,187.794   c5.308-2.897,11.435-1.338,17.318-1.765c0.016,0.114,0.032,0.228,0.048,0.343C317.689,186.443,299.072,195.067,303.687,187.794z    M329.911,161.562c-15.176,2.465-33.766,11.247-30.026,29.668c-1.02,7.573,23.422-3.828,27.984-3.933   c-1.511,12.547-2.613,24.954-4.464,37.428c-16.643,9.862-24.234-0.281-21.725,25.339c-0.532,30.585,5.111,63.836,1.89,93.15   c-10.579,4.346-20.959,8.784-31.561,13.129c-1.879-36.772-2.66-73.542-3.418-110.355c0.802-9.593-20.417,3.967-25.086,4.621   c-1.497-11.73-2.281-23.285-2.936-35.039c-0.074-1.028,0.312-1.266,1.13-1.645c7.527-3.488,15.25-6.504,22.986-9.475   c6.739-1.944-2.033-28.434,2.609-37.499c6.713-26.604,39.192-34.967,62.9-37.691C330.167,133.48,333.698,161.285,329.911,161.562z"
          fill="#3F3756"
        />
        <path
          d="M146.407,148.278c-18.457-1.863-37.092-1.997-55.455-4.972c-3.676-0.164-0.912-5.364-0.425-7.477   c17.519-0.285,35.851,1.828,53.581,3.027c1.138,0.152,3.425,0.301,2.753,1.998C146.696,143.327,147.111,145.837,146.407,148.278z"
          fill="#6087B5"
        />
        <path
          d="M148.236,134.064c-18.268-3.278-36.878-3.066-55.184-5.341c0.963-2.325,1.892-6.039,5.061-5.544   c17.366,0.069,36.183-0.747,52.593,4.124C149.882,129.556,149.059,131.81,148.236,134.064z"
          fill="#6087B5"
        />
        <path
          d="M111.528,107.67c13.63-0.317,27.055,2.358,40.586,3.269c3.207,0.787,8.853-0.872,10.716,2.046   c-5.322,5.447-12.935,2.67-19.688,1.655c-12.715-3.279-26.553,2.07-39.094-1.594C106.072,110.602,108.702,109.001,111.528,107.67z"
          fill="#5F87B5"
        />
        <path
          d="M100.14,117.305c18.068,0.794,36.94-0.064,54.551,3.25c-0.845,1.296-1.691,2.591-2.536,3.887   c-7.13,0.451-14.333-1.634-21.389-2.546c-10.034,0.452-19.876-1.695-29.877-1.918c-0.808-0.009-1.831,0.265-2.206-0.903   C99.078,118.41,99.449,117.725,100.14,117.305z"
          fill="#5F87B5"
        />
        <path
          d="M150.959,271.778c0.033-1.164,0.052-2.329,0.039-3.495C150.928,269.458,150.919,270.622,150.959,271.778z"
          fill="#3C3A5D"
        />
        <path
          d="M417.599,105.437c-1.285-25.304-10.457-32.807-35.336-34.783c-35.925-4.098-72.158-5.487-107.917,0.83   c-41.871,9.034-148.19,12.859-175.638,38.046C67.439,135.852,86.553,308.888,85.458,358.1   c0.954,27.494,25.712,42.028,45.025,57.503c30.26,25.944,49.641,17.96,83.969,6.111c60.205-23.735,123.338-42,180.031-73.588   c23.057-13.155,20.922-43.389,22.721-66.474C417.055,222.939,421.784,164.053,417.599,105.437z M153.862,420.097   c-16.256-6.606-30.189-20.305-44.095-31.259c-12.743-9.265-14.788-24.129-16.112-38.42c0.05-55.638-6.835-146.583-2.108-210.795   c0,0,0,0,0,0c7.833-50.7,82.211-43.092,124.687-52.16c51.056-7.407,102.245-17.088,153.901-9.878   c-19.96,1.575-177.002,19.696-208.939,35.075l0,0c0,0,0,0,0,0c-3.576,1.923-7.915,6.542-11.453,13.525c0,0,0,0,0,0c0,0,0,0,0,0   C140.37,148.253,144.873,401.469,153.862,420.097z M410.721,164.878c-4.914,222.125,29.002,155.275-190.633,245.455   c-15.5,3.723-54.046,24.835-62.285,4.041c-5.478-14.985-13.501-268.183-3.002-286.524l0,0   c27.431-29.413,110.877-28.426,151.589-37.7c31.105-2.804,63.709-14.106,94.538-5.416   C415.828,87.587,409.672,150.694,410.721,164.878z"
          fill="#3C3A5D"
        />
      </g>
    </svg>
  );
};