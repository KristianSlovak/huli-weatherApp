describe("Signup page tests", () => {
  beforeEach("It should visit /signup page", () => {
    cy.visit("http://localhost:3000/signup");
  });

  it('Home link should have attribute "/"', () => {
    cy.get("a").should("have.attr", "href", "/");
  });

  it("Should be able to navigate to signup page", () => {
    cy.get('a[href*="/signup"]').click();
  });

  it("Should be able to navigate to login page", () => {
    cy.get('a[href*="/login"]').click();
  });

  it('Should show message saying "Both fields mus be filled!"', () => {
    cy.get("form").within(() => {
      cy.get('input[name*="Email"]').type("test2@gmail.com");
      cy.get("button").click();
      cy.get('div[class*="tracking-wider"]').should(
        "have.text",
        "Both fields must be filled!"
      );
    });
  });

  it('Should show message saying "Password has to have 1 lower case 1 uppercase and 1 special character."', () => {
    cy.get("form").within(() => {
      cy.get('input[name*="Email"]').type("test2@gmail.com");
      cy.get('input[name*="password"]').type("123456");
      cy.get("button").click();
      cy.get('div[class*="tracking-wider"]').should(
        "have.text",
        "Password has to have 1 lower case 1 uppercase and 1 special character."
      );
    });
  });

  it("Should not be able to sign in with email already in use", () => {
    cy.get("form").within(() => {
      cy.get('input[name*="Email"]').type("test1@gmail.com");
      cy.get('input[name*="password"]').type("ABCabc123!");
      cy.get("button").click();
      cy.get('div[class*="tracking-wider"]').should(
        "have.text",
        "Email already in use!"
      );
    });
  });

  it("Should show password after clicking on eye picture", () => {
    cy.get("form").within(() => {
      cy.get('input[name*="password"]').type("123455");
      cy.get('svg[xmlns*="http://www.w3.org/2000/svg"]').click();
      cy.get('input[name*="password"]').should("have.attr", "type", "text");
    });
  });
});

describe("Login page tests", () => {
  beforeEach("It should visit /login page", () => {
    cy.visit("http://localhost:3000/login");
  });

  it('Home link should have attribute "/"', () => {
    cy.get("a").should("have.attr", "href", "/");
  });

  it("Should be able to navigate to signup page", () => {
    cy.get('a[href*="/signup"]').click();
  });

  it("Should be able to navigate to login page", () => {
    cy.get('a[href*="/login"]').click();
  });

  it('Should show message saying "Both fields mus be filled!"', () => {
    cy.get("form").within(() => {
      cy.get('input[name*="Email"]').type("test2@gmail.com");
      cy.get("button").click();
      cy.get('div[class*="tracking-wider"]').should(
        "have.text",
        "Both fields must be filled!"
      );
    });
  });

  it("Should not be able to login in with email already in use", () => {
    cy.get("form").within(() => {
      cy.get('input[name*="Email"]').type("test32@gmail.com");
      cy.get('input[name*="password"]').type("ABCabc123!");
      cy.get("button").click();
      cy.get('div[class*="tracking-wider"]').should(
        "have.text",
        "Incorrect email!"
      );
    });
  });

  it("Should not be able to login in with incorrect password", () => {
    cy.get("form").within(() => {
      cy.get('input[name*="Email"]').type("test1@gmail.com");
      cy.get('input[name*="password"]').type("abcABC123!");
      cy.get("button").click();
      cy.get('div[class*="tracking-wider"]').should(
        "have.text",
        "Incorrect password!"
      );
    });
  });
});

describe("Main page tests", () => {
  beforeEach("It should visit home page", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("form").within(() => {
      cy.get('input[name*="Email"]').type("test1@gmail.com");
      cy.get('input[name*="password"]').type("ABCabc123!");
      cy.get("button").click();
      cy.wait(1000);
    });
  });
  it("should return true", () => {
    expect(true).to.equal(true);
  });

  it("Should render Inputs Component", () => {
    cy.get('input[type*="text"]').should(
      "have.attr",
      "placeholder",
      "search for city"
    );
    cy.get(
      'div[class*="flex flex-row w-3/4 items-center justify-center space-x-4"]'
    ).find("svg");

    cy.get('button[name*="metric"]').should("have.text", "°C");

    cy.get('button[name*="imperial"]').should("have.text", "°F");

    cy.get('p[class*="text-lg md:text-xl text-white mx-1"]').should(
      "have.text",
      "|"
    );
  });

  it("Should render Forecast Component", () => {
    cy.get('div[class*="flex items-center justify-start mt-6"]').find("p");
  });

  it("Should render TemperatureAndDetails Component", () => {
    cy.get(
      'div[class*="flex items-center justify-center py-6 text-xl text-cyan-300"]'
    ).find("p");

    cy.get('div[class*="flex flex-col space-y-2"]')
      .first()
      .contains("Real feel:");

    cy.get('div[class*="flex flex-col space-y-2"]')
      .first()
      .contains("Humidity:");

    cy.get('div[class*="flex flex-col space-y-2"]').first().contains("Wind:");

    cy.get(
      'div[class*="flex flex-row items-center justify-center space-x-2 text-white text-xs md:text-sm py-3"]'
    ).contains("Rise:");

    cy.get(
      'div[class*="flex flex-row items-center justify-center space-x-2 text-white text-xs md:text-sm py-3"]'
    ).contains("Set:");

    cy.get(
      'div[class*="flex flex-row items-center justify-center space-x-2 text-white text-xs md:text-sm py-3"]'
    ).contains("High:");

    cy.get(
      'div[class*="flex flex-row items-center justify-center space-x-2 text-white text-xs md:text-sm py-3"]'
    ).contains("Low:");
  });

  it("Should render TimeAndLocation Component", () => {
    cy.get('div[class*="flex items-center justify-center my-6"]').find(
      'p[class*="text-white text-sm md:text-xl font-extralight"]'
    );

    cy.get('div[class*="flex items-center justify-center my-3 gap-3"]').find(
      'p[class*="text-white text-base md:text-3xl font-medium"]'
    );
  });

  // it("Should render TopButtons Component", () => {
  //   cy.get('div[class*="flex items-center gap-1"]').find(
  //     'button[class*="text-white text-base md:text-lg font-medium"]'
  //   );
  // });
});
