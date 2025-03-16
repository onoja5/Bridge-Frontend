const AuthSidebar = () => {
  return (
    <aside className='hidden lg:block relative w-0 flex-1'>
      <figure>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src='https://www.betterteam.com/images/betterteam-director-ejecutivo-ceo-vs-director-de-finanzas-cfo-5739x3374-2022106.jpeg?crop=2:1,smart&width=730&dpr=2&format=pjpg&auto=webp&quality=85'
          alt='Career opportunities'
        />
      </figure>

      <div className='absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-75'></div>
      <article className='absolute inset-0 flex items-center justify-center p-12 text-white'>
        <div className='max-w-2xl'>
          <h2 className='text-4xl font-bold mb-4'>Start Your Career Journey</h2>
          <p className='text-xl'>
            Connect with industry leaders and educational institutions to find
            the perfect experiential learning opportunity.
          </p>
        </div>
      </article>
    </aside>
  );
};

export default AuthSidebar;
