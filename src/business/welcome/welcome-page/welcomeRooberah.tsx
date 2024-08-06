import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  Chip,
  Image,
  Kbd,
  Snippet,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import StoreExperience from '#/business/welcome/welcome-page/store-experience/storeExperience.tsx';

const WelcomeRooberah = () => {
  return (
    <div className="mx-auto px-6 pt-20 max-w-[1024px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-5xl bg-gradient-to-tr from-secondary-500 to-primary-500 text-transparent shadow-lg bg-clip-text">
            Hi Rooberah team :)
          </h1>
          <p>
            You can check the application by visiting{' '}
            <Link className="text-primary" to="/products">
              /products
            </Link>
            <br />
            I've also left some technical information in this page as well.
          </p>
        </div>
        <Link to="/products">
          <Button
            endContent={
              <Image
                width={35}
                height={35}
                alt="rooberah"
                src="/rooberah__logo.jpeg"
              />
            }
            size="lg"
            radius="full"
            className="bg-gradient-to-tr from-secondary-500 to-primary-500 text-white shadow-lg font-bold"
          >
            Go to the ROOBERAH Store
          </Button>
        </Link>
      </div>
      <div className="my-16 flex gap-5 justify-between items-start">
        <div className="w-1/2 text-justify">
          <h2 className="text-2xl text-secondary-700">
            This was a well designed and best suited Front-end challenge.
          </h2>
          <p>
            It did open every door to all possible problems in the Front-end
            sphere, from state management to reactivity and API calls. I hope my
            solutions would satisfy you <br />
            below you can find some answers to potential questions that i
            thought you could ask.
          </p>
          <p className="text-warning mt-8">
            btw did you know the store right next this text is interactable? you
            can zoom or rotate the model to look inside the virtual ROOBERAH
            store.
          </p>
        </div>
        <div className="aspect-video w-1/2">
          <StoreExperience />
        </div>
      </div>
      <section className="mt-10">
        <Card className="p-2" isHoverable isBlurred>
          <Accordion>
            <AccordionItem
              aria-label="What kind of thrid-party libraries are being used in this project?"
              title="What kind of thrid-party libraries are being used in this project?"
            >
              <p>
                I was thrilled to find read this{' '}
                <Chip className="inline" color="warning" variant="faded">
                  Don't hesitate to bring third-party tools to the table.
                </Chip>{' '}
                It's my fist time using{' '}
                <span className="text-primary">@nextui</span> so i'd figure it's
                going to be a good challenge to use a new API
              </p>
              <br />
              <p>
                I've also used these packages as they are my everyday tools when
                building react applications{' '}
                <span className="text-primary">@tanstack React Query</span>,{' '}
                <span className="text-primary">lucide icons</span>,{' '}
                <span className="text-primary">zustand</span>,{' '}
                <span className="text-primary">usehooks</span>
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <Snippet>npm install @nextui-org/react</Snippet>
                <Snippet>npm install @tanstack/react-query</Snippet>
                <Snippet>npm install lucide-react</Snippet>
                <Snippet>npm install zustand</Snippet>
                <Snippet>npm install @uidotdev/usehooks</Snippet>
              </div>
            </AccordionItem>
            <AccordionItem
              aria-label="What's up with app or business folders in the src folder? where are regular components and utils folders?"
              title={
                <p>
                  What's up with{' '}
                  <span className="font-bold text-primary">app</span> or{' '}
                  <span className="font-bold text-primary">business</span>{' '}
                  folders in the src folder? where are regular{' '}
                  <span className="font-bold text-warning">components</span> and{' '}
                  <span className="font-bold text-warning">utils</span> folders?
                </p>
              }
            >
              <p>
                It's actually my personal solution to organize Frontend
                application in general it consists of{' '}
                <span className="text-primary">layers</span> each having their
                own rules and relative rules to each other you can read more
                it's inspired from{' '}
                <span className="text-primary">Angular LIFT</span> and{' '}
                <span className="text-primary">Golang's packages</span> about
                them in the <Kbd>README.md</Kbd> file there are more guidelines
                about this application.
              </p>
            </AccordionItem>
            <AccordionItem
              aria-label="There are inconsistencies between this project and the template project provided by the Rooberah team"
              title="There are inconsistencies between this project and the template project provided by the Rooberah team"
            >
              <p>Yes.</p>
              <br />
              <p>
                From the get go I've noticed that the react version in the
                template is 18.2 and there is no first hand support for
                typescript. <br />
                that's why i've started a new vite project however i've copied
                README instructions as well as license and some eslint rules. I
                hope this is okay.
              </p>
              <p className="text-danger">
                If im not allowed to use the license in this project please feel
                free to contract me right away.
              </p>
            </AccordionItem>
            <AccordionItem
              aria-label="Big thank you for mentioning Vitest and unit testing."
              title={
                <p>
                  Big thank you for mentioning{' '}
                  <span className="text-success">Vitest</span> and unit testing.
                </p>
              }
            >
              <p className="text-success font-bold">
                Vitest is actually my first goto testing package and it's
                existing to build a project where unit testing is seen as a
                value.
              </p>
              <p>
                I wish i could send this project to you with 100% test coverage
                in my pocket but unfortunately as im writing this p element its
                looks like im running out of time.
                <br />
                That is why i've prioritized my units to test according to the
                architecture i should be unit testing the lowest units of code
                which can be found at share and core level
              </p>
              <p className="my-2">
                You can also run the Vitest UI dashboard using this command.
              </p>
              <Snippet className="mb-5">yarn test:ui</Snippet>
              <Image
                isZoomed
                src="/vitest__dashboard.png"
                alt="vitest__dashboard"
              />
            </AccordionItem>
          </Accordion>
        </Card>
      </section>
      <div className="flex justify-center items-center p-10">
        <Link to="/products">
          <Button
            endContent={
              <Image
                width={35}
                height={35}
                alt="rooberah"
                src="/rooberah__logo.jpeg"
              />
            }
            size="lg"
            radius="full"
            className="bg-gradient-to-tr from-secondary-500 to-primary-500 text-white shadow-lg font-bold"
          >
            Go to the ROOBERAH Store
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeRooberah;
