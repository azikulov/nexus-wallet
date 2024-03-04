'use client';

import Image from 'next/image';
import UserImage from '@/assets/images/user.png';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
import ShareIcon from '@/assets/icons/fields/share.svg';
import CopyIcon from '@/assets/icons/fields/copy.svg';
import ConfirmedIcon from '@/assets/icons/confirmed.svg';
import NFTImage from '@/assets/images/nfts/nft.png';
import styles from './page.module.scss';
import { useState } from 'react';

export default function DetailNFT() {
  const [nav, setNav] = useState('activity');

  return (
    <div className={styles['detail']}>
      <div className={styles['detail__image']}>
        <Image src={NFTImage} alt='' />
      </div>

      <div className={styles['information']}>
        <div className={styles['information-coin']}>
          <Image src={ToncoinImage} alt='' />
        </div>

        <div className={styles['information-header']}>
          <p className={styles['information-header__title']}>TON Punk #1158</p>

          <div className={styles['information-header__actions']}>
            <button type='button' className={styles['information-header__button']}>
              <CopyIcon />
            </button>
            <button type='button' className={styles['information-header__button']}>
              <ShareIcon />
            </button>
          </div>
        </div>

        <div className={styles['information-main']}>
          <div className={styles['information-main__user']}>
            <Image src={NFTImage} alt='' />

            <span>Punks</span>

            <ConfirmedIcon />
          </div>

          <p className={styles['information-main__description']}>
            Legendary Punks on the Legendary Blochain
          </p>
        </div>

        <div className={styles['information-list']}>
          <div className={styles['nav']}>
            <button
              type='button'
              onClick={() => setNav('info')}
              className={[styles['nav__link'], nav === 'info' && styles['active']].join(' ')}
            >
              Инфо
            </button>

            <button
              type='button'
              onClick={() => setNav('owners')}
              className={[styles['nav__link'], nav === 'owners' && styles['active']].join(' ')}
            >
              Владельцы
            </button>

            <button
              type='button'
              onClick={() => setNav('activity')}
              className={[styles['nav__link'], nav === 'activity' && styles['active']].join(' ')}
            >
              Активность
            </button>

            <button
              type='button'
              onClick={() => setNav('attributes')}
              className={[styles['nav__link'], nav === 'attributes' && styles['active']].join(' ')}
            >
              Атрибуты
            </button>
          </div>

          <div className={styles['header']}>
            <p className={styles['header__label']}>8 Янв</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>

          <div className={styles['transaction']}>
            <div className={styles['transaction__image']}>
              <Image src={UserImage} alt='' />
            </div>

            <p className={styles['transaction__name']}>Ton Transfer</p>
            <p className={styles['transaction__address']}>
              from <span>0xb02...de57</span> to <span>0xb02...de57</span>
            </p>

            <p className={styles['transaction__time']}>08:11</p>
          </div>
        </div>
      </div>
    </div>
  );
}
