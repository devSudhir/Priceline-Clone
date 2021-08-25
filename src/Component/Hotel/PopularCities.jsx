import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export const PopularCities = () => {
  const cities = [
    {
      name: "new York",
      speciality: "24-HOUR EXCiTEMENT",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/new-york-city-ef179cdee55fdfea4dd59b401b23a904.jpg"
    },
    {
      name: "LOS ANGELES",
      speciality: "CUTTING-EDGE COOL",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/los-angeles-c95bf6438b19d05d7a108c8747178b68.jpg"
    },
    {
      name: "ORLANDO",
      speciality: "THEME PARK PARADISE",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/orlando-034ac4ea085582e9e4b95abd9e392bc8.jpg"
    },
    {
      name: "Atlanta",
      speciality: "SWEET SOUTHERN CHARM",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/atlanta-91415d66851175129f889d27f9f568a4.jpg"
    },
    {
      name: "DALLAS",
      speciality: "FOOD CAPITAL",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/dallas-a729d06ad0b7fc9b3fdec23533a8a2da.jpg"
    },
    {
      name: "San Francisco",
      speciality: "SOAK UP THE SCENES",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/san-francisco-7de36c9d7d49993d020c0628c880b256.jpg"
    },
    {
      name: "Miami",
      speciality: "IT'S BEACH TIME",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/miami-6ea7a135a72b075e2fd3d7544b4279e8.jpg"
    },
    {
      name: "Denver",
      speciality: "MILE_HIGH MAGIC",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/denver-7490a37761cf8d417b8f6c6d8f8f90c7.jpg"
    },
    {
      name: "Seattle",
      speciality: "PACIFIC NORTHWEST BEAUTY",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/seattle-ff5921903dc8fa12860caa47339b1999.jpg"
    },
    {
      name: "SAN DIEGO",
      speciality: "RIDE THE WAVES",
      image:
        "https://assets.pclncdn.com/web/next-landing/bc028b7/_next/static/images/san-diego-990b784ec75d983ee6f2b232c02fdf83.jpg"
    }
  ];
  return (
    <>
      {cities.map((ele, index) => {
        console.log(ele.name, ele.speciality, ele.image);
        return (
          <Box key={index}>
            <img src={ele.image} alt="" />
            <Box>
              <Typography>{ele.speciality}</Typography>
              <Typography>{ele.name}</Typography>
              <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Button>Hotels</Button>
                <Button>Cars</Button>
                <Button>Flights</Button>
              </ButtonGroup>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
