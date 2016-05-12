export function capitalize(value) {
  if (typeof value === 'string') {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return value;
}

export function cleanAndcapitalize(value) {
  if (typeof value === 'string') {
    return value.split('-').map(capitalize).join(' ');
  }

  return value;
}
