import { Button } from "@/components/ui/button";

import { User, ShoppingBasket, BadgePercent } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <div className="container flex items-center justify-between py-4 space-y-1.5">
        <div className="flex items-end space-x-10">
          <span className="font-semibold text-2xl">
            ВкусНа<span className="text-primary">Дом</span>
          </span>
          <span className="font-semibold text-muted-foreground">Москва</span>
        </div>
        <div className="space-x-4">
          <Button>
            <User className="w-4 h-4 mr-2" />
            Личный кабинет
          </Button>
          <Button>
            <ShoppingBasket className="w-4 h-4 mr-2" />
            Корзина
          </Button>
        </div>
      </div>
      <div className="border-t border-b">
        <nav className="container py-1">
          <ul className="flex space-x-10">
            <li className="text-sm font-semibold flex items-center">
              <BadgePercent className="w-4 h-4 mr-2" />
              Акции
            </li>
            <li className="text-sm font-semibold">Контакты</li>
            <li className="text-sm font-semibold">Оплата</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
