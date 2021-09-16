export function domainType(domains: string[]): string[] {
  let result = [];

  let newDomains = domains.map((domain) => {
    let subArr = domain.split(".");
    return subArr[subArr.length - 1];
  });

  let domainNames = {
    com: "commercial",
    org: "organization",
    net: "network",
    info: "information",
  };
  for (let domain of newDomains) {
    result.push(domainNames[domain]);
  }

  return result;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
