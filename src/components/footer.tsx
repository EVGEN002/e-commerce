const Footer = () => {
  return (
    <footer className="bg-primary-foreground">
      <div className="container py-8 space-y-4">
        <div className="grid grid-cols-5">
          <div className="space-y-2">
            <div className="font-semibold">Компания</div>
            <div className="flex flex-col">
              <div>Вакансии</div>
              <div>Реквизиты</div>
              <div>Коммерческое предложение</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">Клиентам</div>
            <div className="flex flex-col">
              <div>Доставка и самовывоз</div>
              <div>Акции</div>
              <div>Оплата</div>
              <div>Бонусы</div>
              <div>Новости</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">Информация</div>
            <div className="flex flex-col">
              <div>Политика конфиденциальности</div>
              <div>Пользовательское соглашение</div>
              <div>Для потребителей</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-sm text-muted-foreground">
          © 2024, ВкусНаДом v1.0.0
        </div>
      </div>
    </footer>
  );
};

export default Footer;
