import { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Heart } from 'lucide-react';
import { Button } from '../../ui/button';
import { toast } from 'sonner@2.0.3';

interface Account {
  relation: string;
  bank: string;
  number: string;
  holder: string;
}

const GROOM_ACCOUNTS: Account[] = [
  { relation: '신랑', bank: '신한은행', number: '110-123-456789', holder: '유현욱' },
  { relation: '신랑 아버지', bank: '국민은행', number: '123-45-678901', holder: '유OO' },
  { relation: '신랑 어머니', bank: '우리은행', number: '1002-123-456789', holder: '김OO' },
];

const BRIDE_ACCOUNTS: Account[] = [
  { relation: '신부', bank: 'KB국민은행', number: '123-456-789012', holder: '김연재' },
  { relation: '신부 아버지', bank: '하나은행', number: '123-456789-01234', holder: '김OO' },
  { relation: '신부 어머니', bank: '농협은행', number: '352-1234-5678-90', holder: '박OO' },
];

export default function AccountPage() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(label);
      toast.success('계좌번호가 복사되었습니다');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error('복사에 실패했습니다');
    }
  };

  const AccountCard = ({ account, side }: { account: Account; side: 'groom' | 'bride' }) => {
    const key = `${side}-${account.relation}`;
    const isCopied = copiedIndex === key;

    return (
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">{account.relation}</p>
            <p className="text-sm text-gray-800 truncate" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              {account.bank}
            </p>
            <p className="text-xs text-gray-600 mb-1">{account.holder}</p>
            <p className="text-xs text-gray-500 font-mono">{account.number}</p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => copyToClipboard(account.number.replace(/-/g, ''), key)}
            className={`flex-shrink-0 transition-all ${
              isCopied ? 'bg-green-50 border-green-500 text-green-700' : ''
            }`}
          >
            {isCopied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full overflow-y-auto p-8" style={{ background: '#fafaf8' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <div className="text-center mb-8 pt-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gray-400 mx-auto mb-6"
          />
          <p 
            className="text-gray-400 tracking-wider"
            style={{ fontSize: '0.7rem', fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.3em' }}
          >
            ACCOUNT
          </p>
          <p 
            className="text-gray-700 mt-2"
            style={{ fontSize: '0.9rem', fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
          >
            마음 전하실 곳
          </p>
        </div>

        {/* Groom accounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-sm text-gray-700 mb-4 pb-2 border-b border-gray-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            신랑측
          </h3>
          <div className="space-y-3">
            {GROOM_ACCOUNTS.map((account, index) => (
              <AccountCard key={index} account={account} side="groom" />
            ))}
          </div>
        </motion.div>

        {/* Bride accounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-sm text-gray-700 mb-4 pb-2 border-b border-gray-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            신부측
          </h3>
          <div className="space-y-3">
            {BRIDE_ACCOUNTS.map((account, index) => (
              <AccountCard key={index} account={account} side="bride" />
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
        >
          <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            참석이 어려우신 분들께서 보내주시는<br />
            따뜻한 마음 감사히 받겠습니다 💝
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}