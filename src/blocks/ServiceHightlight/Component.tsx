type ServiceHightlightProps = {
  title: string
  para: string
}

export const ServiceHightlightComponent = ({ title, para }: ServiceHightlightProps) => {
  return (
    <section className="bg-[#F7EAFB] px-6 py-14 text-center md:px-10 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold leading-tight text-[#2F3B51] md:text-4xl">{title}</h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#4A5565] md:text-base">
          {para}
        </p>
      </div>
    </section>
  )
}
