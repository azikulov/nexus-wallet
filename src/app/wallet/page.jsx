'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import SwapIcon from '@/assets/icons/swap.svg';
import StocksIcon from '@/assets/icons/stocks.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import ChevronBottomIcon from '@/assets/icons/chevron-bottom.svg';
import UserImage from '@/assets/images/user.png';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Token } from '@/components/Token';
import { useState } from 'react';

export default function Wallet() {
  const [nav, setNav] = useState('tokens');

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wallet']}>
        <div className={styles['wallet-header']}>
          <button type='button' className={styles['wallet-header__wallet']}>
            <Image src={UserImage} alt='' />

            <span>Wallet 1</span>

            <ChevronBottomIcon />
          </button>

          <Link href='/settings' className={styles['wallet-header__settings']}>
            <SettingsIcon />
          </Link>
        </div>

        <div className={styles['wallet-main']}>
          <div className={styles['wallet-main__balance']}>
            <span>$2,934</span>
            <span>.32</span>
          </div>

          <div className={styles['wallet-main__stocks']}>
            <StocksIcon />
            <span>62.00% ($20.66)</span>
          </div>
        </div>

        <div className={styles['wallet-actions']}>
          <Button className={styles['wallet-actions__button-send']}>Отправить</Button>
          <Button className={styles['wallet-actions__button-replenish']} theme='secondary'>
            Пополнить
          </Button>
          <Button className={styles['wallet-actions__button-swap']} theme='secondary'>
            <SwapIcon />
          </Button>
        </div>
      </div>

      <div className={styles['history']}>
        <div className={styles['history-nav']}>
          <button
            type='button'
            onClick={() => setNav('tokens')}
            className={[styles['history-nav__link'], nav === 'tokens' && styles['active']].join(
              ' '
            )}
          >
            Токены
          </button>

          <button
            type='button'
            onClick={() => setNav('nfts')}
            className={[styles['history-nav__link'], nav === 'nfts' && styles['active']].join(' ')}
          >
            NFTs
          </button>

          <button
            type='button'
            onClick={() => setNav('transactions')}
            className={[
              styles['history-nav__link'],
              nav === 'transactions' && styles['active'],
            ].join(' ')}
          >
            Транзакции
          </button>
        </div>

        <div className={styles['history-list']}>
          {nav === 'tokens' ? (
            <div>
              <Token currency={'toncoin'} />
              <Token currency={'tether'} />
              <Token currency={'litecoin'} />
              <Token currency={'ethereum'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
            </div>
          ) : nav === 'nfts' ? (
            <div className=''>NFTs</div>
          ) : (
            <div className=''>
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'отправлено'} amount={'51.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'отправлено'} amount={'51.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'ошибка'} amount={'20.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'отправлено'} amount={'51.20'} />
              <Transaction status={'ошибка'} amount={'20.20'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getColorByStatus({ status }) {
  if (status === 'получено') return '#39CC83';
  if (status === 'отправлено') return '#8E8E93';
  return '#FF5454';
}

function Transaction({ status, amount }) {
  return (
    <div className={styles['transaction']}>
      <div className={styles['transaction__image']}>
        <Image src={UserImage} alt='' />
      </div>

      <p className={styles['transaction__name']}>Ilya grishin</p>
      <p className={styles['transaction__datetime']}>12 Янв в 12:05</p>

      <p
        style={{ '--color': getColorByStatus({ status }) }}
        className={styles['transaction__amount']}
      >
        {status === 'получено' && '+'}
        {amount} ton
      </p>
      <p
        style={{ '--color': getColorByStatus({ status }) }}
        className={styles['transaction__status']}
      >
        {status}
      </p>
    </div>
  );
}
