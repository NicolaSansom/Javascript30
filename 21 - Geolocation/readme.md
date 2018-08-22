# Lessons learnt

In this episode we looks into geolocation more specifically the additional information that comes along the this API. Creating a compass.

## Setting up the environment

As we are making use of the additional data such as speed we needed to be able simulate movement which cannot be easily done on chrome so we had to use a similator within xcode this is something have never done before I was interesting and surprisingly straight forward to set up.

In it also worth remembering that is this API requires a https connection we were able to get this by using browersync

## Navigator

When using the geolocation API there are method we can choose from `watchPosition` & `getPostion` in are case we used watch as we needed data quiet frequently

## Data returned

Some of the bits of we get from  `watchPosition` are `speed` the phone, is moving. `heading` degrees relative to north, as well as the latitude / longitude values which we could use when ploting on a map.

## Piping data to become visable to the user

We use simply use textContent to directly update the speed

```javascript
  speed.textContent = Math.round(data.coords.speed);
```

To animate the compass arrow we used css animation, as the heading value was already a 360 degree value we just needed to pipe that in.

```javascript
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
```

Lastly we add an error in case the user did not allow use of location
