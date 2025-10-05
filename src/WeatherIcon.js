import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
  const icon = {
    icon: props.code,
    color: "blue",
    size: 52,
    animate: true
  };
  return (
    <ReactAnimatedWeather
      icon={icon.icon}
      color={icon.color}
      size={icon.size}
      animate={icon.animate}
    />
  )
}
